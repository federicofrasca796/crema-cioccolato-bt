import CategoryAccordion from '@/components/CategoryAccordion';
import { Category, Topic, categories, topics } from '@/data/menu';
import { getCategoryItems } from '@/data/utils';

const getCategoriesByTopic = (topicSlug: Topic['slug']) => {
  const topic = topics.find((topic: Topic) => topic.slug === topicSlug);

  if (!topic) throw new Error(`Topic '${topicSlug}' not found`);

  return categories.filter((category) => category.topics.includes(topic.id));
};

export default async function MenuByTopic({
  params
}: {
  params: { topic: Topic['slug'] };
}) {
  const { topic } = params;

  const categoriesByTopic = getCategoriesByTopic(topic);

  const renderCategoryAccordion = (category: Category) => (
    <CategoryAccordion
      key={category.id}
      title={category.name}
      extras={category.extras}
      accordionName={category.slug}
      items={getCategoryItems(category.id)}
      icon={category.image}
      isOpen
    />
  );

  return (
    <article className='container mx-auto mt-10 md:max-h-[200vh] md:columns-2 md:gap-14'>
      {categoriesByTopic.map(renderCategoryAccordion)}
    </article>
  );
}
