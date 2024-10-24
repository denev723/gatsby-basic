import React from "react";
import Layout from "../../components/Layout";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulSkickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulSkickerPack?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulSkickerPack?.name!} />
      <h2>${data.contentfulSkickerPack?.price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String) {
    contentfulSkickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(width: 450, placeholder: BLURRED)
      }
    }
  }
`;
