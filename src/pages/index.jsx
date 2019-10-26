import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { Text } from "@theme-ui/components";
import { useThemeUI } from "theme-ui";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Text
        sx={{
          bg: "accent",
          fontSize: 20,
        }}
      >
        Hello, World!
      </Text>
    </Layout>
  );
};

export default IndexPage;
