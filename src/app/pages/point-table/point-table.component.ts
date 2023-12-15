import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent implements OnInit {
  allPointTable:any;
  tableHeading:any;
pointTable: any;
$index: any;
  constructor(private _api:ApiCallService){

    
  }

  ngOnInit(): void {
    this._api.getPoitnsTable().subscribe({
      next:(res)=>{
        this.allPointTable = res
          // console.log(this.allPointTable);
          this.tableHeading = [...this.allPointTable[0]]
          // console.log(this.tableHeading);
          
          
    },
  })
  }

}
