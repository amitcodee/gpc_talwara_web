import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../dashboard/Services/studentFire.service';


export interface DataSourceInterface {
  [key: string]: any; // Use a generic type to accommodate diverse data sources
}
@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrl: './fee-details.component.scss'
})
export class FeeDetailsComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['feesID', 'regNumber', 'batch',  'branch', 'session', 'sem', 'amount', 'paymentStatus', 'paymentDate', 'paymentMode', 'paymentReference', 'edit']
  dataSource = new MatTableDataSource<any>();

  constructor(
    private studentService: StudentService,
    public datePipe: DatePipe
    ) {}

  ngOnInit() {
    // Get student data from Firebase using your service
    this.studentService.getStudentFees().subscribe(data => {
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

  edit(data: DataSourceInterface) {
      console.log('Edit data:', data);
  }
}
