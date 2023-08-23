import { http } from './http';
import { Product, CategoryType } from './response';

export function getProductsAutoCompleted(query: string) {
  return http.get<string[]>(`/api/products/autocomplete?query=${query ?? ''}`);
}

type ProductRequest = {
  query?: string;
  filter?: string[];
}

export function getProducts({ query, filter }: ProductRequest) {
  const hasCategoryFilter = Boolean(filter?.length);
  const categoryFilter = hasCategoryFilter ? `&filter=${filter}` : '';
  const params = query ? `?query=${query}${categoryFilter}` : '';

  return http.get<Product[]>(`/api/products${params}`);
}

export function getProductCategories() {
  return http.get<CategoryType[]>(`/api/products/categories`);
}
