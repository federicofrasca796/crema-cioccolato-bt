import Navbar from '../Navbar';

export default function Header() {
  return (
    <header className='flex h-20 items-center justify-between'>
      <div className=''>
        <i>Whatsapp</i>
        <i>Instagram</i>
        <i>Facebook</i>
      </div>
      <Navbar />
    </header>
  );
}
