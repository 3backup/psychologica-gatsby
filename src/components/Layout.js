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
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}></Helmet>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
          visableHeader={props.visableHeader}
        />{" "}
        {console.log(data)}
        {console.log(props)}
        {children}
      </React.Fragment>
    )}
  />
);

export default Layout;
