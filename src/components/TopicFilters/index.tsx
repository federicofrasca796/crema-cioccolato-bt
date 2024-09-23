import { Topic, topics } from '@/data/menu/topics';
import { useRouter } from 'next/navigation';
import ClickableBadge from '../elements/Badge/ClickableBadge';

export default function TopicFilters({
  activeTopic
}: {
  activeTopic?: Topic['slug'];
}) {
  const router = useRouter();

  const handleSelect = (topic: Topic['slug']) => () => {
    router.replace(`/menu/${topic}`);
  };

  return (
    <div className='flex items-center gap-4 overflow-x-auto py-1'>
      {topics.map((topic) => (
        <ClickableBadge
          key={topic.id}
          label={topic.name}
          iconLeft={topic.icon}
          isActive={topic.slug === activeTopic}
          onClick={handleSelect(topic.slug)}
          size='large'
          className='flex-shrink-0 rounded-full px-3 shadow-sm'
        />
      ))}
    </div>
  );
}
