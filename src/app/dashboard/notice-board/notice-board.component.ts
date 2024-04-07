import { Component } from '@angular/core';
import { NoticeBoardFormConfig } from '../../shared/Config/noticeboard.config';
import { Notice } from '../../shared/models/noticeModel';
import { MatAccordionTogglePosition } from '@angular/material/expansion';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { NoticeService } from '../Services/fireNotice.service';
import { DatePipe } from '@angular/common';
import { FirebaseTimestampPipe } from '../../shared/pipes/firbaseTimeStamp';



@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss',
})

export class NoticeBoardComponent {
  panelOpenState = false;
  togglePosition : MatAccordionTogglePosition = 'before';

  notices! : Notice[];

  constructor(
    public noticeBoardFormConfig: NoticeBoardFormConfig,
    public dialog: MatDialog,
    private noticeService: NoticeService,
    public datePipe: FirebaseTimestampPipe
      ){
        this.noticeService.getInitialNotices().subscribe(
          (response) => {
            console.log('Initial notices:', response);
            this.notices = response.map((notice) => {
              notice.createdDate = new Date(this.datePipe.transform(notice.createdDate));
              return notice;
            });
          },
          (error) => {
            console.error('Error getting initial notices:', error);
          }
        );
    }



  getFormData(data: Notice) {
    if (typeof data === 'object') {
      console.log(data);
      this.notices.push(data);
      this.noticeService.createNotice(data);
    }
    else {
      console.log('Error: data is not an object');
    }
  }

  getFormType(type: any) {
    if (typeof type === 'string') {
      console.log(type);
    }
    else {
      console.log('Error: type is not a string');
    }
  }

  deleteNotice(idNumber: number) {
    this.noticeService.deleteNotice(idNumber).subscribe(
      (response) => {
        console.log('Notice deleted:', response);
        this.notices = this.notices.filter((notice) => notice.id !== idNumber);
      },
      (error) => {
        console.error('Error deleting notice:', error);
      }
    );
  }


  //editing the notice
  openDialog(data: number) {
    const notice = this.notices.find((notice) => notice.id === data);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80vh',
      data: {
        formConfig: this.noticeBoardFormConfig.noticeFormLayout,
        formConfigData: notice,
      }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result as Notice}`);
      result.id = data;
      console.log('Notice updated:', result);
      this.noticeService.updateNotice(result as Notice).subscribe(
        (response) => {
          console.log('Notice updated:', response);
        },
        (error) => {
          console.error('Error updating notice:', error);
        }
      );

    });
  }
}




