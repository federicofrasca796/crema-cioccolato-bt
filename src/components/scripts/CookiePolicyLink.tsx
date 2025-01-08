import Script from 'next/script';
import Link from '../elements/Link';

export default function CookiePolicyLink() {
  return (
    <>
      <Link
        href='https://www.iubenda.com/privacy-policy/72419928/cookie-policy'
        className='iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe '
        title='Cookie Policy '
      >
        Cookie Policy
      </Link>
      <Script id='cookie-policy' type='text/javascript'>
        {`function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}
      </Script>
    </>
  );
}
