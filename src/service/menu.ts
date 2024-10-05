import {
  categories,
  CategoryWithItems,
  type Category
} from '@/data/menu/categories';
import { items, MenuItem } from '@/data/menu/items';
import { type Topic, topics } from '@/data/menu/topics';

const getItems = (): MenuItem[] => items;

const getCategoriesByTopic = (topicSlug: Topic['slug']) => {
  if (topicSlug === 'all') return categories;

  const topic = topics.find((topic: Topic) => topic.slug === topicSlug);

  if (!topic) throw new Error(`Sezione '${topicSlug}' non trovata`);

  const activeCategories = categories.filter((category) =>
    category.topics.includes(topic.id)
  );

  return activeCategories;
};

const getItemsByCategory = (categorySlug: Category['slug']): MenuItem[] =>
  items.filter((item: MenuItem) => {
    return item.category_id === categorySlug;
  });

const getFilteredItems = (
  categorySlug: Category['slug'],
  searchword?: string
) => {
  const itemsByCategory = getItemsByCategory(categorySlug);

  if (searchword) {
    const filteredCategoryItems = itemsByCategory.filter((item) =>
      item.label.toLowerCase().includes(searchword.toLowerCase())
    );

    return filteredCategoryItems;
  }

  return itemsByCategory;
};

const buildMenu = (
  topicFilter: Topic['slug'],
  searchword?: string
): {
  itemsCount: number;
  categories: Record<Category['slug'], CategoryWithItems>;
} => {
  const topicCategories = getCategoriesByTopic(topicFilter);

  return topicCategories.reduce(
    (acc, cat) => {
      const items = getFilteredItems(cat.slug, searchword);

      return {
        itemsCount: acc.itemsCount + items.length,
        categories: {
          ...acc.categories,
          ...(items && {
            [cat.slug]: {
              ...cat,
              items: items
            }
          })
        }
      };
    },
    { itemsCount: 0, categories: {} }
  );
};

export { getItems, getCategoriesByTopic, getItemsByCategory, getFilteredItems };
export default buildMenu;
