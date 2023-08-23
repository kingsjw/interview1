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
  inCart: boolean;
}

export type CategoryType = {
  name: string;
  children: {
    key: string;
    children: string[];
  }[];
};
