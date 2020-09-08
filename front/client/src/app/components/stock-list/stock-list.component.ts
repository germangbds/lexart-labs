import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/interfaces';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStocks().subscribe(
      res => {
        this.stocks = res;
      },
      err => console.error( err ),
    );
  }

  deleteStock(id: number) {
    this.stockService.deleteStock(id).subscribe(
      res => {
        this.getStocks();
      },
      err => console.error(err)
    );
  }

  editStock(id: number) {
    this.router.navigate(['/stock/edit', id]);
  }

}
