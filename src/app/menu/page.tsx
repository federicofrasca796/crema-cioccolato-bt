import CategoryAccordion from '@/components/CategoryAccordion';
import prisma from '@/lib/db';
import { Prisma } from '@prisma/client';

export default async function MenuPage() {
  const categories = await prisma.category.findMany({
    include: {
      extras: true,
      items: true
    }
  });

  const renderCategoryAccordion = (
    category: Prisma.CategoryGetPayload<{
      include: { items: true; extras: true };
    }>
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
    // Unfiltered menu items
    <article className='container mx-auto mt-10 md:columns-2 md:gap-14'>
      {categories.map(renderCategoryAccordion)}
    </article>
  );
}
