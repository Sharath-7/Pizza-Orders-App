import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderDetails, OrderItem, Statuses } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Array<OrderItem> = [
    {orderId : 1, customerName: 'Aditya', deliveryAddress: 'No. 208, Sri Krishna Nilaya, JP Nagar, Bengaluru', numberOfItemsOrdered: 2, totalAmount: 280, status: Statuses.OrderReceived, orderDetails: []},
    {orderId : 2, customerName: 'Supreeth', deliveryAddress: '33A ,Sector 3 ,Coconut Garden ,Nobo Nagar,Bannerghatta Road, Bengaluru', numberOfItemsOrdered: 1, totalAmount: 150, status: Statuses.OrderReceived, orderDetails: []},
    {orderId : 3, customerName: 'Anand', deliveryAddress: 'Megha Heritage Apartment, Nataraja Layout, Bengaluru', numberOfItemsOrdered: 1, totalAmount: 170, status: Statuses.OrderReceived, orderDetails: []},
    {orderId : 4, customerName: 'Harris', deliveryAddress: 'No.442 8th B Cross, 1st Main Road, Bannerghatta Main Rd, Lakshmi Layout, Arekere, Bengaluru', numberOfItemsOrdered: 3, totalAmount: 350, status: Statuses.OrderReceived, orderDetails: []},
    {orderId : 5, customerName: 'Henry', deliveryAddress: 'No.400 10th Cross, 3rd Main Road, Bannerghatta Main Rd, Arekere, Bengaluru', numberOfItemsOrdered: 5, totalAmount: 890, status: Statuses.OrderReceived, orderDetails: []},
    {orderId : 5, customerName: 'David', deliveryAddress: '152, 4th Cross Rd, Dollars Colony, Sundar Ram Shetty Nagar, Bengaluru', numberOfItemsOrdered: 2, totalAmount: 340, status: Statuses.OrderReceived, orderDetails: []}
  ];

  orderDetails: Array<OrderDetails> = [
    {orderItemId : 1, itemName: 'Pepperoni', price: 120, quantity: 1, totalPrice: 120},
    {orderItemId : 1, itemName: 'Margherita', price: 160, quantity: 1, totalPrice: 160},
    {orderItemId : 2, itemName: 'Mexican Green Wave', price: 150, quantity: 1, totalPrice: 150},
    {orderItemId : 3, itemName: 'Veg Extravaganza', price: 170, quantity: 1, totalPrice: 170},
    {orderItemId : 4, itemName: 'Veggie Paradise', price: 100, quantity: 1, totalPrice: 100},
    {orderItemId : 4, itemName: 'Cheese N Corn', price: 125, quantity: 2, totalPrice: 250},
    {orderItemId : 5, itemName: 'Margherita', price: 160, quantity: 2, totalPrice: 320},
    {orderItemId : 5, itemName: 'Paneer Makhani', price: 190, quantity: 3, totalPrice: 570},
    {orderItemId : 6, itemName: 'Veg Extravaganza', price: 170, quantity: 2, totalPrice: 340}
  ];

  constructor() { }

  // Returns all the orders
  public getAllOrders(): Observable<OrderItem[]>{
    return of(this.orders);
  }

  // Returns the order along with the order details for a particular order
  public getOrderDetailsById(id): Observable<OrderItem>{
    return of(this.orders.filter(x => x.orderId === id).map(order => {
      order.orderDetails = this.orderDetails.filter(x => x.orderItemId === order.orderId);
      return order;
  })[0]);
  }

  // Updates the Status of the order
  public updateStatus(id: number, updatedStatus: string): void {
    this.orders.filter(x => x.orderId === id).map(y => y.status === updatedStatus);
  }
}
