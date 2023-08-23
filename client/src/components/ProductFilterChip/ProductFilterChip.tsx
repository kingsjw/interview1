import styled from '@emotion/styled';
import { FilterChip } from '@ui-components';
import { useRouter } from 'next/router';

export const ProductFilterChip = () => {
  const { query, push } = useRouter();
  const keyword = query.query as string ?? '';
  const filter = query.filter && Array.isArray(query.filter) ? query.filter : typeof query.filter === 'string' ? [query.filter] : [];
  const removeFilter = (filterName: string) => {
    push({
      pathname: '/products',
      query: {
        query: keyword,
        filter: filter.filter(item => item !== filterName),
      },
    });
  };

  return (
    <ProductFilterChipContainer>
      <FilterChipContainer>
        {filter.map(name => (
          <FilterChip key={name} label={name} onClick={() => removeFilter(name)} />
        ))}
      </FilterChipContainer>
    </ProductFilterChipContainer>
  );
};

const ProductFilterChipContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const FilterChipContainer = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 8px;
`;