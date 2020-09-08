import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockFormComponent } from './components/stock-form/stock-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stock',
    pathMatch: 'full'
  },
  {
    path: 'stock',
    component: StockListComponent
  },
  {
    path: 'stock/add',
    component: StockFormComponent
  },
  {
    path: 'stock/edit/:id',
    component: StockFormComponent
  },
  {
    path: '**',
    redirectTo: '/stock'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
