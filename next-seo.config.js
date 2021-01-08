const title = 'Christian Kozalla - Web Developer';
const description =
  'Self-taught Web Developer, crazy about JavaScript & Frontend Frameworks like React.js, Vue.js, Next.js';

const SEO = {
  title,
  description,
  canonical: 'https://chrisko.io',
  openGraph: {
    type: 'website',
    locale: 'en_IT',
    url: 'https://chrisko.io',
    title,
    description,
    images: [
      {
        url: 'https://chrisko.io/images/chrisko-exo-square.png',
        height: 200,
        width: 200,
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@CKozalla',
    site: '@CKozalla',
    cardType: 'summary'
  }
};

export default SEO;
