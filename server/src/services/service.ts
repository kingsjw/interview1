import type { Request, Response } from "express";
import dataSchema from './data.json';
import { CategoryType } from './data';

const products = dataSchema.products;

type RequestQuery = {
  query: string;
  filter: string[];
};

export const getProductsData = async (req: Request, res: Response) => {
  try {
    const { query = '', filter = [] } = req.query as RequestQuery;
    
    if (!query) {
      res.json(products);

      return;
    }

    const filteredProducts = products.filter(({ name, smallCategory }) => {
      const isQueryMatch = name.toLowerCase().includes(String(query).toLowerCase());

      if (!filter.length) {
        return isQueryMatch;
      }

      const isCategoryMatch = filter.includes(smallCategory);

      return isQueryMatch && isCategoryMatch;
    });

    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching products' });
  }
};

export const getAutoCompleteData = async (req: Request, res: Response) => {
  try {
    const { query = '' } = req.query;

    if (!query) {
      res.json([]);

      return;
    }

    const matchedProducts = products.filter((product) => {
      const productName = product.name.toLowerCase();

      return productName.includes(String(query).toLowerCase());
    });

    res.json(matchedProducts.map(({ name }) => name));
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching autocomplete' });
  }
};

export const getCategories = (_: Request, res: Response) => {
  try {
    const results = products.reduce((transformed: CategoryType[], item) => {
      const { category, mediumCategory, smallCategory } = item;
      const categoryItem = transformed.find(item => item.name === category);
      if (!categoryItem) {
        transformed.push({
          name: category,
          children: [{
            key: mediumCategory,
            children: [smallCategory],
          }],
        });
      } else {
        const mediumCategoryItem = categoryItem.children.find(item => item.key === mediumCategory);
        if (!mediumCategoryItem) {
          categoryItem.children.push({
            key: mediumCategory,
            children: [smallCategory],
          });
        } else {
          if (!mediumCategoryItem.children.includes(smallCategory)) {
            mediumCategoryItem.children.push(smallCategory);
          }
        }
      }
      return transformed;
    }, [])

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching categories' });
  }
};
