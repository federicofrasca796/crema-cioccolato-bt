import CategoryAccordion from '@/components/CategoryAccordion';
import { type Category, categories } from '@/data/menu/categories';
import { type MenuItem, items } from '@/data/menu/items';

export default async function Menu() {
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
    // Unfiltered menu items
    <article className='container mx-auto mt-10 md:columns-2 md:gap-14'>
      {categories.map(renderCategoryAccordion)}
    </article>
  );
}
