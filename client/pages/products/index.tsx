import { ProductSearchBar, ProductSearchResult } from '@components';
import { useRouter } from 'next/router';

const Products = () => {
  const { query } = useRouter();
  const keyword = query.query as string ?? '';
  const filter = query.filter as string[] ?? [];

  return (
    <>
      <ProductSearchBar keyword={keyword} />
      <ProductSearchResult keyword={keyword} filter={filter} />
    </>
  );
}

export default Products;
