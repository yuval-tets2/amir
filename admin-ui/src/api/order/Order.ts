import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
