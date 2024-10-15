import clsx from 'clsx';
import Grid from './grid';
import Facebook from './icons/socials/Facebook';
import Instagram from './icons/socials/Instagram';
import Whatsapp from './icons/socials/Whatsapp';
import Link from 'next/link';

const SOCIALS = [
  {
    icon: Whatsapp,
    href: 'https://wa.me/393284689986/?text=Salve!%20Vorrei%20delle%20informazioni%20riguardanti'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/crema_e_cioccolato_barletta/'
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=100082459368047'
  }
];

export default function Socials({
  className,
  rounded = false
}: {
  className?: React.ComponentProps<'div'>['className'];
  rounded?: boolean;
}) {
  return (
    <Grid className={clsx(['auto-cols-min grid-flow-col gap-2', className])}>
      {SOCIALS.map((social, idx) => (
        <Grid.Item key={idx}>
          <Link
            href={social.href}
            target='_blank'
            className={clsx([
              'inline-block w-full rounded-full fill-smokyBrown-700 p-1.5 transition ease-in-out hover:fill-smokyBrown-600',
              {
                'bg-secondary-100 hover:bg-smokyBrown-200': rounded
              }
            ])}
          >
            <social.icon className='w-5' />
          </Link>
        </Grid.Item>
      ))}
    </Grid>
  );
}
