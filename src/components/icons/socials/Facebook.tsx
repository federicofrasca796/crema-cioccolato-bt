export default function Facebook({
  className,
  ...props
}: {
  className?: React.HTMLAttributes<SVGElement>['className'];
} & React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 500 498.17'
      aria-label='Facebook logo'
      className={className}
      {...props}
    >
      <title>Facebook</title>
      <path d='M500,250C500,111.93,388.07,0,250,0S0,111.93,0,250c0,117.24,80.72,215.62,189.61,242.64v-166.24h-51.55v-76.4h51.55v-32.92c0-85.09,38.51-124.53,122.05-124.53,15.84,0,43.17,3.11,54.35,6.21v69.25c-5.9-.62-16.15-.93-28.88-.93-40.99,0-56.83,15.53-56.83,55.9v27.02h81.66l-14.03,76.4h-67.63v171.77c123.79-14.95,219.71-120.35,219.71-248.17Z' />
    </svg>
  );
}

Facebook.defaultProps = {
  className: 'h-5 w-5 fill-smokyBrown'
};
