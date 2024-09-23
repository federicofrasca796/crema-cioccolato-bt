import { categories, type Category } from '@/data/menu/categories';
import { items, MenuItem } from '@/data/menu/items';
import { type Topic, topics } from '@/data/menu/topics';

export const getItems = (): MenuItem[] => items;

export const getCategoriesByTopic = (topicSlug: Topic['slug']) => {
  const topic = topics.find((topic: Topic) => topic.slug === topicSlug);

  if (!topic) throw new Error(`Topic '${topicSlug}' not found`);

  const activeCategories = categories.filter((category) =>
    category.topics.includes(topic.id)
  );

  return activeCategories;
};

export const getItemsByCategory = (
  categorySlug: Category['slug']
): MenuItem[] =>
  items.filter((item: MenuItem) => {
    return item.category_id === categorySlug;
  });
