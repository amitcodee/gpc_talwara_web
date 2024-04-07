import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import { Notice } from '../../shared/models/noticeModel';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private limit = 10; // Limit for initial load and load more
  noticesCollection: AngularFirestoreCollection<Notice>;
  constructor(private db: AngularFirestore) {
    this.noticesCollection = db.collection<Notice>('notices');
  }

  // Get the first 10 notices
  getInitialNotices(): Observable<Notice[]> {
    // Correctly handling the Observable<QuerySnapshot<Notice>>
    return from(this.noticesCollection.ref.limit(this.limit).get()).pipe(
      map(querySnapshot => {
        // Ensure we are mapping over a QuerySnapshot<Notice>
        return querySnapshot.docs.map(doc => doc.data() as Notice);
      }),
      catchError(this.handleError<Notice[]>('getInitialNotices'))
    );
  }

  // Load more notices (append to existing ones)
  loadMoreNotices(lastVisibleNotice: Notice): Observable<Notice[]> {
    return from(this.noticesCollection.ref.orderBy('id').startAfter(lastVisibleNotice.id).limit(this.limit).get()).pipe(
      map(querySnapshot => querySnapshot.docs.map(doc => doc.data() as Notice)),
      catchError(this.handleError<Notice[]>('loadMoreNotices'))
    );
  }

  createNotice(notice: Notice): Observable<any> {
    // Generate a unique ID (implement your preferred method)
    notice.id = this.generateUniqueId();
    return from(this.noticesCollection.doc(notice.id.toString()).set(notice)).pipe(
      catchError((error) => {
        console.error('Error creating notice:', error);
        return error;
      })
    );
  }

  updateNotice(notice: Notice): Observable<void> {
    return from(this.noticesCollection.doc<Notice>(notice.id.toString()).update(notice)).pipe(
      catchError(this.handleError<void>('updateNotice'))
    );
  }

  deleteMultipleNotices(ids: string[]): Observable<void> {
    const batch = this.db.firestore.batch();
    ids.forEach(id => {
      const docRef = this.noticesCollection.doc(id).ref;
      batch.delete(docRef);
    });
    return from(batch.commit()).pipe(
      mapTo(undefined),
      catchError(this.handleError<void>('deleteMultipleNotices'))
    );
  }

  deleteNotice(id: number): Observable<void> {
    return from(this.noticesCollection.doc<Notice>(id.toString()).delete()).pipe(
      mapTo(undefined),
      catchError(this.handleError<void>('deleteNotice'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Use throwError as a function to defer error construction
      return throwError(() => new Error(`${operation} failed: ${error.message}`));
    };
  }

   // Generate a unique ID (replace with your preferred method)
   private generateUniqueId(): number {
    // Implement your logic for generating a unique ID (e.g., incrementing counter, UUID)
    return Math.floor(Math.random() * Date.now());
  }
}
