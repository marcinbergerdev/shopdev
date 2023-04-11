interface Orders {
  id: number;
  categories?: string;
  img: string;
  name: string;
  amount: boolean;
  price: number;
  title: string;
  description: string;
  deleteButton?: boolean;
}

export default Orders;