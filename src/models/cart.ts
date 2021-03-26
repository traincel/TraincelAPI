import CartItem from "./cartItem";

export default interface Cart{
    id:number,
    userId: string;
    cartItems: CartItem[];
    subTotal: number;
}