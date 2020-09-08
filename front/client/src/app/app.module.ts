import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StockFormComponent } from './components/stock-form/stock-form.component';
import { StockListComponent } from './components/stock-list/stock-list.component';

import { StockService } from './services/stock.service';
import { ClientService } from './services/client.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StockFormComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StockService,
    ClientService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
