'use client';
import clsx from 'clsx';

export type ButtonVariants = 'contained' | 'outlined' | 'text';
export type ButtonColors =
  | 'neutral'
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info';
export type ButtonSizes = 'tiny' | 'small' | 'medium' | 'large';
export type ButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>['className'];
  children: React.ReactNode;
  color?: ButtonColors;
  endIcon?: React.ReactNode;
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  size?: ButtonSizes;
  startIcon?: any;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: ButtonVariants;
  disabled?: boolean;
  fullWidth?: boolean;
};

const COLORS: Record<
  ButtonColors,
  React.HTMLAttributes<HTMLButtonElement>['className'] | null
> = {
  neutral: 'btn-neutral',
  accent: 'btn-accent',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  info: 'btn-info'
};

const VARIANTS: Record<
  ButtonVariants,
  React.HTMLAttributes<HTMLButtonElement>['className'] | null
> = {
  contained: null,
  outlined: 'btn-outline',
  text: 'btn-link'
};

const SIZES: Record<
  ButtonSizes,
  React.HTMLAttributes<HTMLButtonElement>['className'] | null
> = {
  tiny: 'btn-xs',
  small: 'btn-sm',
  medium: null,
  large: 'btn-lg'
};

export default function Button({
  className,
  children,
  color = 'primary',
  disabled,
  endIcon,
  fullWidth,
  onClick,
  size = 'medium',
  startIcon,
  type = 'button',
  variant = 'contained'
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx([
        'btn',
        VARIANTS[variant],
        COLORS[color],
        SIZES[size],
        className,
        { 'btn-block': fullWidth }
      ])}
      disabled={disabled}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
}
