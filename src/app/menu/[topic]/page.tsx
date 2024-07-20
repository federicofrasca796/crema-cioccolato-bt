import CategoryAccordion from '@/components/CategoryAccordion';
import { type Category, categories } from '@/data/menu/categories';
import { items, type MenuItem } from '@/data/menu/items';
import { type Topic, topics } from '@/data/menu/topics';

const getCategoriesByTopic = (topicSlug: Topic['slug']) => {
  const topic = topics.find((topic: Topic) => topic.slug === topicSlug);

  if (!topic) throw new Error(`Topic '${topicSlug}' not found`);

  const activeCategories = categories.filter((category) =>
    category.topics.includes(topic.id)
  );

  return activeCategories;
};

export default async function MenuByTopic({
  params
}: {
  params: { topic: Topic['slug'] };
}) {
  const { topic } = params;

  const categoriesByTopic = getCategoriesByTopic(topic);

  const filterItemsByCategory = (categorySlug: Category['slug']) =>
    items.filter((item: MenuItem) => {
      return item.category_id === categorySlug;
    });

  const renderCategoryAccordion = (category: Category) => (
    <CategoryAccordion
      key={category.id}
      title={category.name}
      extras={category.extras}
      accordionName={category.slug}
      items={filterItemsByCategory(category.slug)}
      icon={category.image}
      isOpen
      className='animate-fadeIn'
    />
  );

  return (
    <article className='container mx-auto mt-10 md:columns-2 md:gap-14'>
      {categoriesByTopic.map(renderCategoryAccordion)}
    </article>
  );
}
