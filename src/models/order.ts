import OrderItem from "./orderItem";
import User from "./user";

export default interface Order {
  id: string;
  localId: number;
  orderPlaceOn: Date;
  quantity: number;
  subtotal: number;
  userId: string;
  invoiceId: string;
  user: User;
  orderItems: OrderItem[];
}
