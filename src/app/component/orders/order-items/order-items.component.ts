import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderItem, Statuses } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit, OnDestroy {
  public ordersList: OrderItem[];
  private ordersListSubscription: Subscription;
  constructor(private ordersService: OrderService, private router: Router) {
    this.ordersListSubscription = this.ordersService.getAllOrders().subscribe((data) => {
      this.ordersList = data;
    }, (error) => {
      console.log('Error: ' + error);
    });
    // console.log('ordersList ' + JSON.stringify(this.ordersList));
   }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
      if (this.ordersListSubscription) {
          this.ordersListSubscription.unsubscribe();
          this.ordersListSubscription = null;
      }
    }

    // Updating the status of a particular order on click of update button
    public updateStatus(data): void{
       const updatedStatus = data.status === Statuses.OrderReceived ? Statuses.Preparing : Statuses.Ready;
       this.ordersList[this.ordersList.indexOf(data)].status = updatedStatus;
       this.ordersService.updateStatus(data.orderId, updatedStatus);
    }

    public showDetails(id): void {
      // this.router.navigateByUrl('/orderDetails', {
      //   state: {
      //     orderId: id
      //   }
      // });
    this.router.navigate(['/orderDetails/' + id]);
    }
}
