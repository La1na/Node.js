// 1

function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  const total = price * quantity;
  const discountedTotal = total - (total * discount);
  return discountedTotal;
}

console.log(calculateTotal(100, 2));        
console.log(calculateTotal(100, 2, 0.3));    


// 2

let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === 'string') {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id * 10}`);
  }
}

id = "abc123";
displayId(id); 

id = 42;
displayId(id); 

// 3

type OrderStatus = "pending" | "shipped" | "delivered";

interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { orderId: "A1", amount: 100, status: "pending" },
  { orderId: "A2", amount: 200, status: "shipped" },
  { orderId: "A3", amount: 150, status: "delivered" },
  { orderId: "A4", amount: 120, status: "pending" }
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter(order => order.status === status);
}

console.log(filterOrdersByStatus(orders, "pending"));


// 4

type ProductInfo = [string, number, number];

function updateStock(
  inventory: { [productName: string]: number },
  productInfo: ProductInfo
): { [productName: string]: number } {
  const [name, _price, stock] = productInfo;
  inventory[name] = stock;
  return inventory;
}

const inventory = { "Phone": 5, "Laptop": 10 };
const productInfo: ProductInfo = ["Phone", 699, 8];

console.log(updateStock(inventory, productInfo));


