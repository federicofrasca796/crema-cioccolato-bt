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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const canVibrate = typeof window !== 'undefined' && navigator;
    if (canVibrate) navigator.vibrate(1);
    if (onClick) onClick(event);
  };

  return (
    <button onClick={handleClick} className='flex-shrink-0'>
      <Badge
        {...badgeProps}
        label={label}
        variant={isActive ? 'contained' : 'outlined'}
      />
    </button>
  );
}
