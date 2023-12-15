import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from 'src/app/services/api-call.service';
import { MatchCardComponent } from "../../components/match-card/match-card.component";

@Component({
    selector: 'app-history',
    standalone: true,
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    imports: [CommonModule, HistoryComponent, MatchCardComponent]
})
export class HistoryComponent implements OnInit {
  allMatch:any; 

constructor(private _api:ApiCallService){}
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:(data:any) =>
      this.allMatch = data
      
    },
    
  
    )
    
  }
}
