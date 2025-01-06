import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-TJW5KCBE5F'
      />
      <Script id='google-analytics'>
        {`
        window.dataLayer = window.dataLayer || []; 
        function gtag() {
          window.dataLayer.push(arguments)
        }
        gtag('js', new Date());
        gtag('config', 'G-TJW5KCBE5F');
        `}
      </Script>
    </>
  );
}
