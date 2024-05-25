'use client';
import clsx from 'clsx';
import NextLink from 'next/link';
import { BUTTON_VARIANTS, ButtonVariants } from './Button';

type LinkTypes = 'link' | 'button';
export type LinkColors =
  | 'neutral'
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info';

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  buttonVariant?: ButtonVariants;
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLAnchorElement>['className'];
  color?: LinkColors;
  fullWidth?: boolean;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  underlineOnHover?: boolean;
  type?: LinkTypes;
}

const LINK_TYPES: Record<
  LinkTypes,
  React.HTMLAttributes<HTMLAnchorElement>['className']
> = {
  button: 'btn',
  link: 'link'
};

const LINK_COLORS: Record<
  LinkColors,
  Record<LinkTypes, React.HTMLAttributes<HTMLAnchorElement>['className']>
> = {
  neutral: {
    button: 'btn-neutral',
    link: 'link-neutral'
  },
  accent: {
    button: 'btn-accent',
    link: 'link-accent'
  },
  primary: {
    button: 'btn-primary',
    link: 'link-primary'
  },
  secondary: {
    button: 'btn-secondary',
    link: 'link-secondary'
  },
  success: {
    button: 'btn-success',
    link: 'link-success'
  },
  warning: {
    button: 'btn-warning',
    link: 'link-warning'
  },
  error: {
    button: 'btn-error',
    link: 'link-error'
  },
  info: {
    button: 'btn-info',
    link: 'link-info'
  }
};

export default function Link({
  children,
  className,
  color = 'primary',
  fullWidth,
  href,
  target = '_self',
  type = 'link',
  buttonVariant,
  underlineOnHover = false,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      target={target}
      className={clsx([
        LINK_TYPES[type],
        buttonVariant && BUTTON_VARIANTS[buttonVariant],
        LINK_COLORS[color][type],
        underlineOnHover && 'md:link-hover',
        fullWidth && 'btn-block',
        className
      ])}
      {...props}
    >
      {children}
    </NextLink>
  );
}
