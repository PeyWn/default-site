import React from "react";
import Layout from "../components/layout/layout";
import { useStaticQuery, graphql } from "gatsby";

export const P3 = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(name: { eq: "links" }, extension: { eq: "json" }) {
        name
        childJsonJson {
          links {
            reddit
            yt
          }
        }
      }
    }
  `);
  const yt = data.file.childJsonJson.links.yt;

  const reddit = data.file.childJsonJson.links.reddit;
  return (
    <Layout>
      Reddit:
      <ul>
        {reddit.map(link => {
          return <li>{link}</li>;
        })}
      </ul>
      YouTube:
      <ul>
        {yt.map(link => {
          return <li>{link}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default P3;
