import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Seo from "./Seo";
import "normalize.css";

const Layout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <Seo
          title={props.pageTitle}
          description={props.pageDescription}
          image={props.pageImage}
          imageAlt={props.pageImageAlt}
          noIndex={props.noIndex}
          pageType={props.pageType}
          service={props.service}
          breadcrumbs={props.breadcrumbs}
          faq={props.faq}
        />
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
          visableHeader={props.visableHeader}
        />

        {children}
      </React.Fragment>
    )}
  />
);

export default Layout;
