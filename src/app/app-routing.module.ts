import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OrderDetailsComponent } from './component/orders/order-details/order-details.component';
import { OrderItemsComponent } from './component/orders/order-items/order-items.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ordersList',
    component: OrderItemsComponent
  },
  {
    path: 'orderDetails/:id',
    component: OrderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
