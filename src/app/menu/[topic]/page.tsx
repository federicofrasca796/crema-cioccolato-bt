import CategoryAccordion from '@/components/CategoryAccordion';
import prisma from '@/lib/db';
import { Prisma } from '@prisma/client';

export default async function MenuByTopicPage({
  params
}: {
  params: {
    topic: Prisma.TopicGetPayload<{}>['slug'];
  };
}) {
  const { topic } = params;

  const categoriesByTopic: Prisma.CategoryGetPayload<{
    include: { items: true; extras: true };
  }>[] = await prisma.category.findMany({
    where: {
      topics: {
        some: {
          slug: topic
        }
      }
    },
    include: {
      extras: true,
      items: true
    }
  });

  const renderCategoryAccordion = (
    category: (typeof categoriesByTopic)[number]
  ) => (
    <CategoryAccordion
      key={category.id}
      title={category.name}
      extras={category.extras}
      accordionName={category.slug}
      items={category.items}
      // isOpen
      className='animate-fadeIn'
    />
  );

  return (
    <article className='container mx-auto mt-10 md:columns-2 md:gap-14'>
      {categoriesByTopic.map(renderCategoryAccordion)}
    </article>
  );
}
