import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../dashboard/Services/studentFire.service';


export interface DataSourceInterface {
  [key: string]: any; // Use a generic type to accommodate diverse data sources
}


@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.scss'
})
export class ViewStudentsComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'regNumber', 'batch', 'name', 'fatherName', 'displayImage', 'branch', 'contact']
  dataSource = new MatTableDataSource<any>();

  constructor(
    private studentService: StudentService,
    ) {}

  ngOnInit() {
    // Get student data from Firebase using your service
    this.studentService.getStudents().subscribe(data => {
      this.dataSource.data = data;

    })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
