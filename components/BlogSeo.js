import { NextSeo, ArticleJsonLd } from 'next-seo';

export default function BlogSeo({ title, description, date, url }) {
  const datePublished = new Date(date).toISOString();

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
          description: description
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
      />
    </>
  );
}
