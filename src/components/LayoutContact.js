import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import { siteMetadata } from "../../gatsby-config";
import { Helmet } from "react-helmet";
import Header from "./Header";
import "normalize.css";

const LayoutContact = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuerySite {
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
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}></Helmet>

        {children}
      </React.Fragment>
    )}
  />
);

export default LayoutContact;
