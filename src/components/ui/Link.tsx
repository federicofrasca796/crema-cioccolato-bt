'use client';
import clsx from 'clsx';
import NextLink from 'next/link';
import { BUTTON_VARIANTS, ButtonVariants } from './Button';

type LinkLooks = 'link' | 'button';
export type LinkColors =
  | 'neutral'
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info';

export interface LinkProps {
  buttonVariant?: ButtonVariants;
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLAnchorElement>['className'];
  color?: LinkColors;
  fullWidth?: boolean;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  underlineOnHover?: boolean;
  look?: LinkLooks;
}

const LINK_LOOKS: Record<
  LinkLooks,
  React.HTMLAttributes<HTMLAnchorElement>['className']
> = {
  button: 'btn',
  link: 'link'
};

export default function Link({
  children,
  className,
  color = 'primary',
  fullWidth,
  href,
  target = '_self',
  look = 'link',
  buttonVariant,
  underlineOnHover = false
}: LinkProps) {
  const LINK_COLORS: Record<LinkColors, string> = {
    neutral: `${LINK_LOOKS[look]}-neutral`,
    accent: `${LINK_LOOKS[look]}-accent`,
    primary: `${LINK_LOOKS[look]}-primary`,
    secondary: `${LINK_LOOKS[look]}-secondary`,
    success: `${LINK_LOOKS[look]}-success`,
    warning: `${LINK_LOOKS[look]}-warning`,
    error: `${LINK_LOOKS[look]}-error`,
    info: `${LINK_LOOKS[look]}-info`
  };

  return (
    <NextLink
      href={href}
      target={target}
      className={clsx([
        LINK_LOOKS[look],
        buttonVariant && BUTTON_VARIANTS[buttonVariant],
        LINK_COLORS[color],
        underlineOnHover && 'link-hover',
        fullWidth && 'btn-block',
        className
      ])}
    >
      {children}
    </NextLink>
  );
}
