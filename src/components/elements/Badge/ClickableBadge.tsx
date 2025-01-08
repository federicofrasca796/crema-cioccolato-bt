import useVibrate from '@/hooks/useVibrate';
import Badge, { BadgeProps } from './Badge';

export interface ClickableBadgeProps extends BadgeProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
}

export default function ClickableBadge({
  label,
  onClick,
  isActive = false,
  ...badgeProps
}: ClickableBadgeProps) {
  const vibrate = useVibrate(1);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    vibrate();
    if (onClick) onClick(event);
  };

  return (
    <button onClick={handleClick}>
      <Badge
        {...badgeProps}
        className='rounded-lg border-2 px-2 py-1 font-bold'
        label={label}
        variant={isActive ? 'contained' : 'outlined'}
        title={`${isActive ? 'Selected' : ''} ${label}`}
        aria-selected={isActive}
      />
    </button>
  );
}
