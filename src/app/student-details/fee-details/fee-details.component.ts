import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../dashboard/Services/studentFire.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

import { FeesFormConfig } from '../../shared/Config/fees.config';
import { FeesAcademicSection } from '../../shared/models/studentModel';
import { FirebaseTimestampPipe } from '../../shared/pipes/firbaseTimeStamp';

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
  dataSource = new MatTableDataSource<FeesAcademicSection>();

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog,
    public FeesFormConfig: FeesFormConfig,
    public datePipe: FirebaseTimestampPipe
    ) {}

    ngOnInit() {
      // Get student data from Firebase using your service
      this.studentService.getStudentFees().subscribe(data => {
        console.log('Data:', data);

        // Directly transform data to FeesAcademicSection[] with paymentDate as Date
        const feesAcademicSectionArray: FeesAcademicSection[] = data.flatMap(fees =>
          {
            fees.paymentDate= new Date (this.datePipe.transform(fees.paymentDate, 'yyyy-MM-dd'));
            return fees;
          }
        );

        // Assign transformed data to dataSource
        this.dataSource.data = feesAcademicSectionArray;

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        console.log('Data source:', this.dataSource);
      });
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
      this.openDialog(data['feesID']);
  }

  openDialog(data: string) {
    let foundFee!: FeesAcademicSection;

    // Find the fee using a more efficient approach (optional)
    const index = this.dataSource.data.findIndex(fees => fees.feesID === data);
    if (index !== -1) {
      foundFee = this.dataSource.data[index];
    } else {
      // Handle case where fee not found (optional)
      console.error('Fee not found in data source');
      return; // Or handle it differently based on your needs
    }

    // Update fee properties before opening dialog (optional)
    foundFee.paymentMode = 'Cash';
    foundFee.paymentReference = 'Cash';

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80vh',
      data: {
        formConfig: this.FeesFormConfig.feeFormLayout,
        formConfigData: foundFee,
        typeOfForm: 'Fees',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update data source with modified fee data from dialog result
        const updatedFeeIndex = this.dataSource.data.findIndex(fees => fees.feesID === foundFee.feesID);
        if (updatedFeeIndex !== -1) {
          this.dataSource.data[updatedFeeIndex] = result; // Replace with updated data from dialog
          this.dataSource._updateChangeSubscription(); // Refresh the data source
        }
      }
    });
  }
}
