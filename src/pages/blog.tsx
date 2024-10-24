import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  return (
    <Layout title="Hello Welcome to my blog">
      <p>The most recent news from my shops</p>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;
