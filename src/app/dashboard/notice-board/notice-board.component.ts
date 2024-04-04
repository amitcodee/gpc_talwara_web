import { Component } from '@angular/core';
import { NoticeBoardFormConfig } from '../../shared/Config/noticeboard.config';
import { Column, Notice } from '../../shared/models/noticeMode';
import { MatAccordionTogglePosition } from '@angular/material/expansion';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';



@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss',
})

export class NoticeBoardComponent {
  panelOpenState = false;
  togglePosition : MatAccordionTogglePosition = 'before';

  columns: Column[] = [
    { label: 'Title', property: 'title' },
    { label: 'Content', property: 'content' }
  ];

  newColumn: Column = {
    label: '',
    property: ''
  };

  notices : Notice[] = [
    {
      id:  0,
      title: 'Notice 1',
      content: 'This is the first notice',
      createdby: 'Admin',
      createdDate: new Date(),
      modifiedby: 'Admin1'
    },
    {
      id: 1,
      title: 'Notice 2',
      content: 'This is the second notice',
      createdby: 'Admin',
      createdDate: new Date(),
      modifiedby: 'Admin1'
    }
  ];

  newNotice: Notice = {
    id:0,
    title: 'test',
    content: 'this is test',
    createdby: 'Admin',
    createdDate: new Date(),
    modifiedby: 'Admin',
  };

  constructor(
    public noticeBoardFormConfig: NoticeBoardFormConfig,
    public dialog: MatDialog
    ){

  }

  openDialog(data: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80vh',
      data: {
        formConfig: this.noticeBoardFormConfig.noticeFormLayout,
        formConfigData: this.notices[data],
      }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result as Notice}`);
      result.map((notice: Notice) => {

      })

    });
  }

  getFormData(data: any) {
    if (typeof data === 'object') {
      console.log(data);
      this.notices.push(data);
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


  }





