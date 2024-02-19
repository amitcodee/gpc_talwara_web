import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface ColumnInterface {
  name: string;
  displayName: string;
  // Add any other optional column properties:
  // - type: 'string' | 'number' | 'date' | etc.
  // - format: Function to format data
  // - editable: boolean
  // - deletable: boolean
}

export interface DataSourceInterface {
  [key: string]: any; // Use a generic type to accommodate diverse data sources
}


@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.scss'
})
export class ViewStudentsComponent implements AfterViewInit {
  dataSource: DataSourceInterface[] = [];
  olumns: ColumnInterface[] = [];
  isEditable = true;
  isDeletable = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [];
  dataSource$ = new MatTableDataSource<DataSourceInterface>();

  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource$.paginator = this.paginator;
    this.dataSource$.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource$.filter = filterValue.trim().toLowerCase();

    if (this.dataSource$.paginator) {
      this.dataSource$.paginator.firstPage();
    }
  }
}

