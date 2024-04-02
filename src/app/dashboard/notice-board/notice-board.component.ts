import { Component, OnInit } from '@angular/core';


interface Notice {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss'
})

export class NoticeBoardComponent implements OnInit {
  notices: Notice[] = [];
  selectedNotice: Notice = { id: 0, title: '', content: '' };
  formTitle: string = 'Add Notice';
  formButtonText: string = 'Add';

  ngOnInit() {
    // Fetch notices from server or initialize with sample data
    this.notices = [
      { id: 1, title: 'Notice 1', content: 'Content of Notice 1' },
      { id: 2, title: 'Notice 2', content: 'Content of Notice 2' }
    ];
  }

  editNotice(notice: Notice) {
    this.selectedNotice = { ...notice };
    this.formTitle = 'Edit Notice';
    this.formButtonText = 'Update';
  }

  deleteNotice(notice: Notice) {
    // Delete notice from server or remove from local array
    this.notices = this.notices.filter(n => n.id !== notice.id);
  }

  onSubmit() {
    if (this.selectedNotice.id) {
      // Update existing notice
      const index = this.notices.findIndex(n => n.id === this.selectedNotice.id);
      this.notices[index] = this.selectedNotice;
    } else {
      // Add new notice
      this.selectedNotice.id = Date.now();
      this.notices.push(this.selectedNotice);
    }
    this.resetForm();
  }

  resetForm() {
    this.selectedNotice = { id: 0, title: '', content: '' };
    this.formTitle = 'Add Notice';
    this.formButtonText = 'Add';
  }
}
