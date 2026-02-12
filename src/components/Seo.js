import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

const Seo = ({ title, description, image, imageAlt }) => {
  const { site } = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            businessAddress {
              streetAddress
              addressLocality
              postalCode
              addressCountry
            }
          }
        }
      }
    `
  );

  const metadata = site?.siteMetadata || {};
  const { siteUrl, title: siteTitle, description: siteDescription, businessAddress } = metadata;
  const location = useLocation();
  const canonical = `${siteUrl}${location.pathname === "/" ? "" : location.pathname}`;
  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;
  const ogImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`) : `${siteUrl}/og-image.jpg`;

  const meta = [
    { name: "description", content: metaDescription },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:url", content: canonical },
    { property: "og:type", content: "website" },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: imageAlt || metaTitle },
    { property: "og:locale", content: "pl_PL" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:image:alt", content: imageAlt || metaTitle },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Psychologica - Renata Zuba",
    description: siteDescription || metaDescription,
    url: siteUrl,
    image: `${siteUrl}/logo-psychologica.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessAddress?.streetAddress || "Mikołaja Reja 12/320",
      addressLocality: businessAddress?.addressLocality || "Rzeszów",
      postalCode: businessAddress?.postalCode || "35-211",
      addressCountry: businessAddress?.addressCountry || "PL",
    },
    areaServed: {
      "@type": "City",
      name: "Rzeszów",
    },
  };

  return (
    <Helmet title={metaTitle} meta={meta}>
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default Seo;
