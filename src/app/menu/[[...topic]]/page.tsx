import CategoryAccordion from '@/components/CategoryAccordion';
import { type Topic } from '@/data/menu/topics';

export default async function MenuByTopic({
  params
}: {
  // TODO: fix topic type, this is not typesafe as I can change it to string, while for nextjs it's an array
  params: { topic: Topic['slug'] };
}) {
  const { topic } = params;

  if (topic?.length > 1) throw new Error(`Questa non è una sezione valida`);

  return (
    <article className='container mx-auto md:columns-2 md:gap-14'>
      <CategoryAccordion.List topic={topic?.[0] ?? 'all'} />
    </article>
  );
}
