import { NextSeo, ArticleJsonLd } from 'next-seo';

export default function BlogSeo({
  id,
  title,
  description,
  date,
  url,
  imageUrl
}) {
  const datePublished = new Date(date).toISOString();
  const absoluteImageUrl = `https://chrisko.io${imageUrl}`;
  return (
    <>
      <NextSeo
        title={`${title} - Christian Kozalla`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: { publishedTime: datePublished },
          url,
          title,
          description: description,
          images: [
            {
              url: absoluteImageUrl,
              width: 200,
              height: 200,
              alt: 'Featured Article Image'
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@CKozalla',
          handle: '@CKozalla'
        }}
      />
      <ArticleJsonLd
        authorName="Christian Kozalla"
        dateModified={datePublished}
        datePublished={datePublished}
        description={description}
        publisherLogo="/images/chrisko-exo-square.png"
        publisherName="Christian Kozalla"
        title={title}
        url={url}
        images={[`https://chrisko.io/images/${id}.png`]}
      />
    </>
  );
}
