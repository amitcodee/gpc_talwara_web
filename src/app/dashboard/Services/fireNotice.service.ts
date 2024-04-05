import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,  } from '@angular/fire/compat/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Notice } from '../../shared/models/noticeModel';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoticeService {
  private noticesCollection: AngularFirestoreCollection<Notice>;
  private limit = 10; // Limit for initial load and load more

  constructor(private db: AngularFirestore) {
    this.noticesCollection = this.db.collection<Notice>('notices');
  }

  // Get the first 10 notices
  getInitialNotices(): Observable<Notice[]> {
    return this.noticesCollection.get().pipe(
      map((notices) => notices.docs.map((notice) => notice.data() as Notice)),
      catchError((error) => {
        console.error('Error getting initial notices:', error);
        return error.value;
      })
    ) as Observable<Notice[]>;
  }

  // Load more notices (append to existing ones)


  // Create a new notice
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

  // Get a notice by ID
  getNotice(id: number): Observable<Notice> {
    return this.noticesCollection.doc<Notice>(id.toString()).valueChanges().pipe(
      catchError((error) => {
        console.error('Error getting notice by ID:', error);
        return error;
      }),
      map((notice) => notice || {} as Notice)
    ) as Observable<Notice>;
  }

  // Update a notice
  updateNotice(notice: Notice): Observable<any> {
    return from(this.noticesCollection.doc<Notice>(notice.id.toString()).update(notice)).pipe(
      catchError((error) => {
        console.error('Error updating notice:', error);
        return error;
      })
    );
  }

  // Delete a notice by ID
  deleteNotice(id: number): Observable<any> {
    return from(this.noticesCollection.doc<Notice>(id.toString()).delete());
  }

  // Delete multiple notices (implement based on your needs)
  deleteMultipleNotices(ids: number[]): Observable<any> {
    // Implement logic to delete notices based on provided IDs (batch delete, loop, etc.)
    // Use a transaction or batch write for efficiency if deleting a large number.
    throw new Error('Not implemented yet. Implement logic for deleting multiple notices.');
  }

  // Generate a unique ID (replace with your preferred method)
  private generateUniqueId(): number {
    // Implement your logic for generating a unique ID (e.g., incrementing counter, UUID)
    return Math.floor(Math.random() * Date.now());
  }
}
