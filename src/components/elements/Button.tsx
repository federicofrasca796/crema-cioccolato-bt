'use client';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'motion/react';

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

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLButtonElement>['className'];
  color?: ButtonColors;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  size?: ButtonSizes;
  startIcon?: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: ButtonVariants;
}

const BUTTON_COLORS: Record<
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

export const BUTTON_VARIANTS: Record<
  ButtonVariants,
  React.HTMLAttributes<HTMLButtonElement>['className'] | null
> = {
  contained: null,
  outlined: 'btn-outline',
  text: 'btn-link'
};

const BUTTON_SIZES: Record<
  ButtonSizes,
  React.HTMLAttributes<HTMLButtonElement>['className'] | null
> = {
  tiny: 'btn-xs',
  small: 'btn-sm',
  medium: null,
  large: 'btn-lg'
};

export default function Button({
  children,
  className,
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
    <motion.button
      type={type}
      onClick={onClick}
      className={clsx([
        'btn',
        BUTTON_VARIANTS[variant],
        BUTTON_COLORS[color],
        BUTTON_SIZES[size],
        className,
        { 'btn-block': fullWidth }
      ])}
      disabled={disabled}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </motion.button>
  );
}
