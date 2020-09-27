// To get the order data. We have order details as well.
// We can have another customer object containing the customerId, name, address, etc. But for now stuck to the below approach.
export class OrderItem {
  orderId: number;
  customerName: string;
  deliveryAddress: string;
  numberOfItemsOrdered: number;
  totalAmount: number;
  status: string;
  orderDetails: OrderDetails[];
}

export class OrderDetails {
  orderItemId: number;
  itemName: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export enum Statuses {
  OrderReceived = 'Order Received',
  Preparing = 'Preparing',
  Ready = 'Ready to serve'
}

