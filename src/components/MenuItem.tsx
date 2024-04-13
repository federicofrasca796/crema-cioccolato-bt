import clsx from 'clsx';
import Badge from './elements/Badge';

interface MenuItemProps {
  title: string;
  subtitle?: string;
  price: number;
  badges?: { icon: string; className: string }[];
  tooltip?: string;
  className?: HTMLDivElement['className'];
  isExtraItem?: boolean;
}

const parsePrice = (price: number) => {
  return '€' + ' ' + price.toFixed(2).toString().replace('.', ',');
};

export default function MenuItem({
  badges,
  className,
  isExtraItem,
  price,
  subtitle,
  title,
  tooltip
}: MenuItemProps) {
  return (
    <div className={clsx('inline-flex min-h-10 w-full', className)}>
      <div className='grow'>
        <div className="mb-0.5 after:block after:h-[0.45rem] after:bg-smokyBrown-400 after:[mask-image:url('/assets/wavy-dotted-line.svg')]">
          <h3 title={title} className='max-w-[80%]'>
            {title}
          </h3>
        </div>
        <p className='text-sm text-smokyBrown-600'>{subtitle}</p>
      </div>
      <div>
        <Badge
          label={parsePrice(price)}
          variant={isExtraItem ? 'outlined' : 'contained'}
          className={clsx('min-w-max', {
            'border-none bg-secondary-200 text-primary hover:bg-secondary-300':
              !isExtraItem
          })}
        />
      </div>
    </div>
  );
}
