import { Category, items } from './menu';

export const getCategoryItems = (categoryId: Category['id']) =>
  items.filter((item) => {
    return item.category === categoryId;
  });
