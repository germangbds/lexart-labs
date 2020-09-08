import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock, Client, Product, StockSimple } from '../../models/interfaces';
import { StockService } from '../../services/stock.service';
import { ClientService } from '../../services/client.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stockSimple: StockSimple = {
    id: 0,
    quantity: 0,
    id_client: 1,
    id_product: 1,
    created_at: new Date()
  };
  stock: Stock = {};

  clients: Client[] = [];
  products: Product[] = [];

  edit = false;

  constructor(private stockService: StockService,
              private clientService: ClientService,
              private productService: ProductService,
              private router: Router, private activetedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.activetedRoute.snapshot.params;
    if (params.id) {
      this.stockService.getStock(params.id).subscribe(
        res => {

          this.stock = res;

          this.stockSimple.id = this.stock.id;
          this.stockSimple.quantity = this.stock.quantity;
          this.stockSimple.id_client = this.stock.client.id;
          this.stockSimple.id_product = this.stock.product.id;
          this.stockSimple.created_at = this.stock.created_at;

          this.edit = true;
        },
        err => console.error(err)
      );
    }
    this.getClients();
    this.getProducts();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      res => {
        this.clients = res;
      },
      err => console.error( err ),
    );
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error( err ),
    );
  }

  saveNewStock() {
    delete this.stockSimple.created_at;
    delete this.stockSimple.id;

    this.stockService.saveStock(this.stockSimple).subscribe(
      res => {
        this.router.navigate(['/stock']);
      },
      err => console.error(err)
    );
  }

  updateStock() {
    delete this.stockSimple.created_at;

    this.stockService.updateStock(this.stockSimple.id, this.stockSimple).subscribe(
      res => {
        this.router.navigate(['/stock']);
      },
      err => console.error(err)
    );
  }

}
