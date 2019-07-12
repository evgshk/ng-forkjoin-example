import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  public labels: string[] = ["AAPL", "NEE", "J1PM", "MSFT", "MA", "FB", "DIS"];
  public result: any[] = [];

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
    this.loadLabelsHistory().subscribe(
      responses => responses.forEach(item => this.result.push(item))
    );
  }

  private loadLabelsHistory(): Observable<any[]> {
    const responses = new Array<Observable<any>>();
    const from: Date = new Date(2019, 5, 1);
    const to: Date = new Date(2019, 5, 30);

    this.labels.forEach(label => {
      const response = this.stocksService.getHistoricalPrice(label, from, to);
      responses.push(response);
    });

    return forkJoin(...responses);
  } 
}
