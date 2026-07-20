import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

const normalizePath = (path = "/") => {
  if (path === "/") return "/";
  if (path === "/404.html") return "/404/";
  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
};

const toAbsoluteUrl = (siteUrl, value) => {
  if (!value) return siteUrl;
  if (/^https?:\/\//.test(value)) return value;
  return `${siteUrl}${value.startsWith("/") ? "" : "/"}${value}`;
};

const Seo = ({
  title,
  description,
  image,
  imageAlt,
  noIndex = false,
  pageType = "WebPage",
  service,
  breadcrumbs = [],
  faq = [],
}) => {
  const { site, datoCmsGlobal } = useStaticQuery(
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
        datoCmsGlobal {
          email
          phonenumber
        }
      }
    `,
  );

  const metadata = site?.siteMetadata || {};
  const {
    siteUrl,
    title: siteTitle,
    description: siteDescription,
    businessAddress,
  } = metadata;
  const location = useLocation();
  const canonicalPath = normalizePath(location.pathname);
  const canonical = `${siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;
  const socialImage = toAbsoluteUrl(siteUrl, image || "/og-image.jpg");
  const businessLogo = toAbsoluteUrl(siteUrl, "/logo-psychologica.png");
  const personImage = toAbsoluteUrl(siteUrl, "/og-image.jpg");
  const businessId = `${siteUrl}/#business`;
  const personId = `${siteUrl}/#renata-zuba`;
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${canonical}#webpage`;
  const serviceId = service ? `${canonical}#service` : null;

  const meta = [
    { name: "description", content: metaDescription },
    {
      name: "robots",
      content: noIndex
        ? "noindex,follow"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:url", content: canonical },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Psychologica" },
    { property: "og:image", content: socialImage },
    { property: "og:image:alt", content: imageAlt || metaTitle },
    { property: "og:locale", content: "pl_PL" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    { name: "twitter:image", content: socialImage },
    { name: "twitter:image:alt", content: imageAlt || metaTitle },
  ];

  const address = {
    "@type": "PostalAddress",
    streetAddress: businessAddress?.streetAddress || "Mikołaja Reja 12/320",
    addressLocality: businessAddress?.addressLocality || "Rzeszów",
    postalCode: businessAddress?.postalCode || "35-211",
    addressCountry: businessAddress?.addressCountry || "PL",
  };

  const graph = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: "Psychologica",
      description: siteDescription,
      inLanguage: "pl-PL",
      publisher: { "@id": businessId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Renata Zuba",
      url: `${siteUrl}/o-mnie/`,
      image: personImage,
      jobTitle: ["psycholog kliniczny", "psychoterapeuta"],
      worksFor: { "@id": businessId },
      knowsAbout: [
        "psychologia kliniczna",
        "psychoterapia dorosłych",
        "psychoterapia uzależnień",
        "psychodrama",
        "superwizja psychoterapii uzależnień",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Specjalista psychoterapii uzależnień, certyfikat nr 123",
          credentialCategory: "certyfikat zawodowy",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Superwizor psychoterapii uzależnień, certyfikat nr 34",
          credentialCategory: "certyfikat zawodowy",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Psycholog kliniczny",
          credentialCategory: "kwalifikacja zawodowa",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: "Psychologica - Renata Zuba",
      description: siteDescription,
      url: `${siteUrl}/`,
      logo: businessLogo,
      image: socialImage,
      telephone: datoCmsGlobal?.phonenumber,
      email: datoCmsGlobal?.email,
      address,
      areaServed: [
        { "@type": "City", name: "Rzeszów" },
        { "@type": "Country", name: "Polska" },
      ],
      founder: { "@id": personId },
      employee: { "@id": personId },
      priceRange: "PLN",
    },
  ];

  const pageNode = {
    "@type": pageType,
    "@id": webpageId,
    url: canonical,
    name: metaTitle,
    description: metaDescription,
    inLanguage: "pl-PL",
    isPartOf: { "@id": websiteId },
    about: serviceId ? { "@id": serviceId } : { "@id": businessId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: socialImage,
    },
  };

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: service.name,
      description: service.description || metaDescription,
      serviceType: service.serviceType || service.name,
      url: canonical,
      provider: { "@id": businessId },
      areaServed: service.areaServed || {
        "@type": "City",
        name: "Rzeszów",
      },
      audience: service.audience
        ? { "@type": "Audience", audienceType: service.audience }
        : undefined,
    });
    pageNode.mainEntity = { "@id": serviceId };
  }

  if (breadcrumbs.length) {
    const breadcrumbId = `${canonical}#breadcrumbs`;
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${normalizePath(item.path)}`,
      })),
    });
    pageNode.breadcrumb = { "@id": breadcrumbId };
  }

  if (faq.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      url: `${canonical}#faq`,
      inLanguage: "pl-PL",
      isPartOf: { "@id": webpageId },
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  graph.push(pageNode);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <>
      <Helmet title={metaTitle} meta={meta} htmlAttributes={{ lang: "pl" }}>
        <link rel="canonical" href={canonical} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Helmet>
      {!noIndex && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};

export default Seo;
