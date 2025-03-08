import MenuRenderer from '@/components/MenuRenderer';
import { topics, type Topic } from '@/data/menu/topics';

export function generateStaticParams() {
  const params = topics.map((topic) => ({
    topic: [topic.slug]
  }));
  params.push({ topic: [] });
  return params;
}

export default async function MenuByTopic({
  params
}: {
  // TODO: fix topic type, this is not typesafe as I can change it to string, while for nextjs it's an array
  params: { topic: Topic['slug'] };
}) {
  const { topic } = params;
  if (topic?.length > 1) throw new Error(`Questa non è una sezione valida`);

  const items = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu/items`)
  ).json();

  return (
    <article className='container min-h-48'>
      <MenuRenderer topic={topic} items={items} />
    </article>
  );
}
