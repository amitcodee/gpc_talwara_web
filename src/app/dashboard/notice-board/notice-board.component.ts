import { Component } from '@angular/core';
import { NoticeBoardFormConfig } from '../../shared/Config/noticeboard.config';
import { Column, Notice } from '../../shared/models/noticeMode';
import { MatAccordionTogglePosition } from '@angular/material/expansion';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog.component';


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
      id:  1,
      title: 'Notice 1',
      content: 'This is the first notice',
      createdby: 'Admin',
      createdDate: new Date(),
      modifiedby: 'Admin1'
    },
    {
      id: 2,
      title: 'Notice 2',
      content: 'This is the second notice',
      createdby: 'Admin',
      createdDate: new Date(),
      modifiedby: 'Admin1'
    }
  ];

  newNotice: Notice = {
    id:0,
    title: '',
    content: '',
    createdby: '',
    createdDate: new Date(),
    modifiedby: '',
  };

  constructor(
    public noticeBoardFormConfig: NoticeBoardFormConfig,
    public dialog: MatDialog
    ){

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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

  addColumn() {
    if (this.newColumn.label && this.newColumn.property) {
      this.columns.push({ ...this.newColumn });
      this.newColumn = { label: '', property: '' };
    }
  }

  deleteColumn(column: Column) {
    this.columns = this.columns.filter(c => c !== column);
  }

  addNotice() {
    if (Object.values(this.newNotice).every(value => value)) {
      this.notices.push({ ...this.newNotice });
      this.newNotice = {
        id: 0,
        title: '',
        content: '',
        createdby: '',
        createdDate: new Date(),
        modifiedby: '',
      };
    }
  }

  editNotice(notice: Notice) {
    // Implement the logic to edit the selected notice
    console.log('Edit notice:', notice);
  }

  deleteNotice(notice: Notice) {
    // Implement the logic to delete the selected notice
    console.log('Delete notice:', notice);
  }

  }





