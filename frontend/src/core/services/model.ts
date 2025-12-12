export type ProductProps = {
  productId: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  brand: string;
  oldPrice?: number;
  stock: string;
  ratingAvg: number;
  reviews: number;
  sale: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  seller: {
    sellerId: number;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    categoryId: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  images: {
    imageId: number;
    name: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  };
};