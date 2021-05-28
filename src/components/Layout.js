import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import { siteMetadata } from "../../gatsby-config";
import { Helmet } from "react-helmet";

import Header from "./Header";
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
        <Helmet
          title={props.pageTitle}
          meta={[{ name: "description", content: `${props.pageDescription}` }]}>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="src/images/favicon-32x32.png"
          />
        </Helmet>
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
