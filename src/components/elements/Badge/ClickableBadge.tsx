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
    <button onClick={handleClick}>
      <Badge
        {...badgeProps}
        className='rounded-lg border-2 px-2 py-1 font-bold'
        label={label}
        variant={isActive ? 'contained' : 'outlined'}
      />
    </button>
  );
}
