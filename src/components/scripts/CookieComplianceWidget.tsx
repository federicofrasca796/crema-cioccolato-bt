import Script from 'next/script';

export default function CookieComplianceWidget() {
  return (
    <>
      <Script id='cookie-compliance-widget' type='text/javascript'>
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {"siteId":${process.env.NEXT_PUBLIC_IUBENDA_SITE_ID},"cookiePolicyId":${process.env.NEXT_PUBLIC_IUBENDA_COOKIE_POLICY_ID},"lang":"it","storage":{"useSiteId":true}};
        `}
      </Script>
      <Script
        type='text/javascript'
        src={`https://cs.iubenda.com/autoblocking/${process.env.NEXT_PUBLIC_IUBENDA_SITE_ID}.js`}
      />
      <Script
        type='text/javascript'
        src='//cdn.iubenda.com/cs/iubenda_cs.js'
        charSet='UTF-8'
        async
      />
    </>
  );
}
