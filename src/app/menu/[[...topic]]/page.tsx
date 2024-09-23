import CategoryAccordion from '@/components/CategoryAccordion';
import { categories, type Category } from '@/data/menu/categories';
import { type Topic, topics } from '@/data/menu/topics';
import { getItemsByCategory } from '@/service/menu';

const getCategoriesByTopic = (topicSlug: Topic['slug']) => {
  const topic = topics.find((topic: Topic) => topic.slug === topicSlug);

  if (!topic) throw new Error(`Sezione '${topicSlug}' non trovata`);

  const activeCategories = categories.filter((category) =>
    category.topics.includes(topic.id)
  );

  return activeCategories;
};

export default async function MenuByTopic({
  params
}: {
  // TODO: fix topic type, this is not typesafe as I can change it to string, while for nextjs it's an array
  params: { topic: Topic['slug'][] };
}) {
  const { topic } = params;

  const categoriesByTopic = topic ? getCategoriesByTopic(topic[0]) : categories;

  if (topic?.length > 1) throw new Error(`Questa non è una sezione valida`);

  const renderCategoryAccordion = (category: Category) => (
    <CategoryAccordion
      key={category.id}
      title={category.name}
      extras={category.extras}
      accordionName={category.slug}
      items={getItemsByCategory(category.slug)}
      icon={category.image}
      className='animate-fadeIn'
    />
  );

  return (
    <article className='container mx-auto md:columns-2 md:gap-14'>
      {categoriesByTopic.map(renderCategoryAccordion)}
    </article>
  );
}
