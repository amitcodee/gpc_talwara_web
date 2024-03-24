import { Injectable, Signal } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

Injectable({
  providedIn: 'root'
})

export class NotificationService {
  itemsRef!: AngularFireList<any>;
  items!: Observable<any[]>;

  constructor(
    private af: AngularFireAuth,
    private afs: AngularFirestore,
    private db: AngularFireDatabase
  ) {
    this.itemsRef = db.list('messages');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  // Add methods to send notifications

  sendNotification() {
    // Send notifications
    this.itemsRef.push({
      title: 'Notification Title',
      body: 'Notification Body'
    });
  }

  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
}
