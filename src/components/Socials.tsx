import clsx from 'clsx';
import Grid from './grid';
import Facebook from './icons/socials/Facebook';
import Instagram from './icons/socials/Instagram';
import Whatsapp from './icons/socials/Whatsapp';

export default function Socials({
  className
}: {
  className?: React.ComponentProps<'div'>['className'];
}) {
  return (
    <Grid className={clsx(['auto-cols-min grid-flow-col gap-1', className])}>
      <Grid.Item>
        <a
          href='#'
          className='inline-block w-full rounded-full bg-secondary-100 p-1.5 transition ease-in-out hover:bg-smokyBrown-200'
        >
          <Whatsapp className='w-5 fill-smokyBrown-700' />
        </a>
      </Grid.Item>
      <Grid.Item>
        <a
          href='#'
          className='inline-block w-full rounded-full bg-secondary-100 p-1.5 transition ease-in-out hover:bg-smokyBrown-200'
        >
          <Instagram className='w-5 fill-smokyBrown-700' />
        </a>
      </Grid.Item>
      <Grid.Item>
        <a
          href='#'
          className='inline-block w-full rounded-full bg-secondary-100 p-1.5 transition ease-in-out hover:bg-smokyBrown-200'
        >
          <Facebook className='w-5 fill-smokyBrown-700' />
        </a>
      </Grid.Item>
    </Grid>
  );
}
