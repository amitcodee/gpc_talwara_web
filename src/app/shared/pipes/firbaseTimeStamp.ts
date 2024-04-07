import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firebaseTimestamp' })
export class FirebaseTimestampPipe implements PipeTransform {
  transform(timestamp: any, format: string = 'medium'): string {
    if (!timestamp) {
      return ''; // Handle potential undefined values
    }
    const date = timestamp.toDate();
    return new DatePipe('en-US').transform(date, format) ?? ''; // Or your locale
  }
}
