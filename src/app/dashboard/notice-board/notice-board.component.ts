import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NoticeBoardFormConfig } from '../../shared/Config/noticeboard.config';
import { Notice } from '../../shared/models/noticeMode';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class NoticeBoardComponent {
  dataSource : Notice[] = [
    {
      title: 'Notice 1',
      content: 'This is the first notice',
      createdby: 'Admin',
      createdDate: new Date(),
      modifiedby: 'Admin1'
    },
    {
      title: 'Notice 2',
      content: 'This is the second notice',
      createdby: 'Admin',
      createdDate: new Date(),
      modifiedby: 'Admin1'
    }
  ];

  columnsToDisplay = ['title', 'createdBy', 'createdDate', 'modifiedby'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Notice | null;

  constructor( public noticeBoardFormConfig: NoticeBoardFormConfig){

  }

  getFormData(data: any) {
    if (typeof data === 'object') {
      console.log(data);
      this.dataSource.push(data);
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


