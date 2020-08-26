const title = 'Christian Kozalla - Web Developer';
const description =
  'Self-taught Web Enthusiast, crazy about JavaScript, Front-end & Back-end Development';

const SEO = {
  title,
  description,
  canonical: 'https:devdiary.me',
  openGraph: {
    type: 'website',
    locale: 'en_IT',
    url: 'https://devdiary.me',
    title,
    description,
    images: [
      {
        url: 'https://devdiary.me/images/Avatar_CK_mid.jpg',
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@CKozalla',
    site: '@CKozalla',
    cardType: 'summary_large_image'
  }
};

export default SEO;
