import { NextSeo, ArticleJsonLd } from 'next-seo';

export default function BlogSeo({ id, title, description, date, url }) {
  const datePublished = new Date(date).toISOString();
  const imageUrl = `https://devdiary.me/images/${id}.jpg`;
  return (
    <>
      <NextSeo
        title={`${title} - Chris' Devdiary`}
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
              url: imageUrl,
              width: 300,
              height: 200,
              alt: 'Featured Article Image'
            }
          ]
        }}
      />
      <ArticleJsonLd
        authorName="Christian Kozalla"
        dateModified={datePublished}
        datePublished={datePublished}
        description={description}
        publisherLogo="/images/Avatar_CK_min.jpg"
        publisherName="Christian Kozalla"
        title={title}
        url={url}
        images={[`https://devdiary.me/images/${id}.jpg`]}
      />
    </>
  );
}
