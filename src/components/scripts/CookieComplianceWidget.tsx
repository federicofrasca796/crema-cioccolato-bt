import Script from 'next/script';

export default function CookieComplianceWidget() {
  return (
    <>
      <Script id='cookie-compliance-widget' type='text/javascript'>
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {"siteId":3886063,"cookiePolicyId":72419928,"lang":"it","storage":{"useSiteId":true}};
        `}
      </Script>
      <Script
        type='text/javascript'
        src='https://cs.iubenda.com/autoblocking/3886063.js'
      ></Script>
      <Script
        type='text/javascript'
        src='//cdn.iubenda.com/cs/iubenda_cs.js'
        charSet='UTF-8'
        async
      ></Script>
    </>
  );
}
