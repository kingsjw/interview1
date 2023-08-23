export type Product = {
  id: number;
  category: string;
  mediumCategory: string;
  smallCategory: string;
  name: string;
  description: string;
  netPrice: number;
  listPrice: number;
  imageUrl: string;
}

export type CategoryType = {
  name: string;
  children: {
    key: string;
    children: string[];
  }[];
};
