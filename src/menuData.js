export const SHOP = {
  name: "Minh Ngọc Quán",
  address: "123 Đường Lê Lợi, TP. Vũng Tàu",
  phone: "0909 123 456",
};

export const CATEGORIES = ["Tất cả", "Lẩu", "Mì", "Ăn vặt", "Trà sữa", "Nước giải khát", "Nước có cồn"];

const IMG = (id) =>
  `https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/${id}`;

export const MENU = [
  { id: 1, name: "Cà phê đen", cat: "Cà phê", price: 20000, unit: "ly", image: IMG("v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png") },
  { id: 2, name: "Cà phê sữa", cat: "Cà phê", price: 25000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 3, name: "Bạc xỉu", cat: "Cà phê", price: 28000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 4, name: "Cappuccino", cat: "Cà phê", price: 45000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 5, name: "Latte", cat: "Cà phê", price: 48000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 6, name: "Americano", cat: "Cà phê", price: 40000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 7, name: "Cold Brew", cat: "Cà phê", price: 50000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 8, name: "Trà đào", cat: "Trà", price: 35000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 9, name: "Trà vải", cat: "Trà", price: 35000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 10, name: "Trà sữa trân châu", cat: "Trà", price: 40000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 11, name: "Trà chanh", cat: "Trà", price: 25000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 12, name: "Trà hoa cúc", cat: "Trà", price: 30000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 13, name: "Sinh tố bơ", cat: "Sinh tố", price: 45000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 14, name: "Sinh tố dâu", cat: "Sinh tố", price: 40000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 15, name: "Sinh tố xoài", cat: "Sinh tố", price: 40000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 16, name: "Sinh tố chuối", cat: "Sinh tố", price: 35000, unit: "ly", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 17, name: "Bánh mì", cat: "Ăn vặt", price: 25000, unit: "ổ", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 18, name: "Bánh croissant", cat: "Ăn vặt", price: 35000, unit: "cái", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 19, name: "Bánh flan", cat: "Ăn vặt", price: 20000, unit: "cái", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 20, name: "Khoai tây chiên", cat: "Ăn vặt", price: 30000, unit: "phần", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 21, name: "Coca Cola", cat: "Nước ngọt", price: 15000, unit: "lon", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 22, name: "Pepsi", cat: "Nước ngọt", price: 15000, unit: "lon", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 23, name: "7Up", cat: "Nước ngọt", price: 15000, unit: "lon", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
  { id: 24, name: "Nước suối", cat: "Nước ngọt", price: 10000, unit: "chai", image: "https://res.cloudinary.com/dvxbqlxmq/image/upload/w_300,h_200,c_fill,q_auto,f_auto/v1778644759/C%C3%A1_Th%C3%A1c_L%C3%A1c_udzdx0.png" },
];