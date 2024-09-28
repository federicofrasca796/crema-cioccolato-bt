import clsx from 'clsx';
import { ReactNode } from 'react';

export type BadgeVariants = 'contained' | 'outlined';
export type BadgeColors =
  | 'neutral'
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info';
export type BadgeSizes = 'tiny' | 'small' | 'medium' | 'large';
export type BadgeProps = {
  label: ReactNode;
  color?: BadgeColors;
  variant?: BadgeVariants;
  size?: BadgeSizes;
  className?: React.HTMLAttributes<HTMLSpanElement>['className'];
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

const COLORS: Record<
  BadgeColors,
  React.HTMLAttributes<HTMLSpanElement>['className']
> = {
  neutral: 'badge-neutral',
  accent: 'badge-accent',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  info: 'badge-info'
};

const VARIANTS: Record<
  BadgeVariants,
  React.HTMLAttributes<HTMLSpanElement>['className']
> = {
  contained: '',
  outlined: 'badge-outline'
};

const SIZES: Record<
  BadgeSizes,
  React.HTMLAttributes<HTMLSpanElement>['className']
> = {
  tiny: 'badge-xs',
  small: 'badge-sm',
  medium: 'badge-md',
  large: 'badge-lg'
};

export default function Badge({
  label,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  className,
  iconLeft,
  iconRight
}: BadgeProps) {
  return (
    <span
      className={clsx(
        ['badge flex-shrink-0', COLORS[color], VARIANTS[variant], SIZES[size]],
        className
      )}
    >
      {iconLeft && <span className='mr-1'>{iconLeft}</span>}
      {label}
      {iconRight && <span className='ml-1'>{iconRight}</span>}
    </span>
  );
}
