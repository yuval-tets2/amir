import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
