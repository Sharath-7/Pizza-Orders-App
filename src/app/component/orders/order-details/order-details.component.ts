import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderDetails, OrderItem } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  private activatedRouteQueryParamsSubscription : Subscription;
  private orderDetailsSubscription:Subscription;
  // private orderId;
  public order: OrderItem;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private orderService: OrderService) {
              //   this.activatedRouteQueryParamsSubscription = this.activatedRoute.queryParams.subscribe((res) => {
              //     if (this.router.getCurrentNavigation().extras.state) {
              //         this.orderId = this.router.getCurrentNavigation().extras.state.orderId;
              //     }
              //     this.displayOrderDetails(this.orderId)
              // });
               }

  ngOnInit(): void {
      let orderId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      this.displayOrderDetails(orderId)
  }

  ngOnDestroy(): void {
    if (this.activatedRouteQueryParamsSubscription) {
        this.activatedRouteQueryParamsSubscription.unsubscribe();
        this.activatedRouteQueryParamsSubscription = null;
    }
    if (this.orderDetailsSubscription) {
      this.orderDetailsSubscription.unsubscribe();
      this.orderDetailsSubscription = null;
    }
  }

// Getting the order details on click of row based on Id
  public displayOrderDetails(id): void{
    this.orderDetailsSubscription = this.orderService.getOrderDetailsById(id).subscribe((data) => {
        this.order=data;
      }, (error) => {
        console.log('Error: ' + error);
    });
  }
}
