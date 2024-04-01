import { Component, ChangeDetectorRef  } from '@angular/core';
import { RandomStudentDataService } from '../RandomData/randomData';
import { StudentService } from '../Services/studentFire.service';

interface CardData {
  title: string;
  subtitle?: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrl: './main-dash.component.scss'
})
export class MainDashComponent {

  data: CardData[] = [
    // Add your card data here
    { title: 'Card 1', content: 'Some content for card 1', date: '2024-02-12' },
    { title: 'Card 2', content: 'Some content for card 2', date: '2024-02-11' },
    { title: 'Card 1', content: 'Some content for card 1', date: '2024-02-12' },
    { title: 'Card 2', content: 'Some content for card 2', date: '2024-02-11' },
    { title: 'Card 1', content: 'Some content for card 1', date: '2024-02-12' },
    { title: 'Card 2', content: 'Some content for card 2', date: '2024-02-11' },
    { title: 'Card 1', content: 'Some content for card 1', date: '2024-02-12' },
    { title: 'Card 2', content: 'Some content for card 2', date: '2024-02-11' },
    // ...
  ];

  constructor(
    private cd: ChangeDetectorRef,
    private randData: RandomStudentDataService,
    private studentService: StudentService
    ) {}

  check() {
   this.studentService.addStudent(this.randData.generateRandomStudent());
  }

  // refreshCard(item: CardData) {
  //   // Call your refreshData() function to get new data
  //   const newData = refreshData(item.id); // Replace with your logic
  //   item.content = newData.content;
  //   item.date = newData.date;
  //   // Trigger change detection to update the card
  //   this.cd.detectChanges();
  // }
}
