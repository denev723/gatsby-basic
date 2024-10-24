import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to Denev Stickers👋">
      <div className="grid">
        {data.allContentfulSkickerPack.nodes.map((sticker) => (
          <article key={sticker.id}>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h4>{sticker.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulSkickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, width: 450)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
