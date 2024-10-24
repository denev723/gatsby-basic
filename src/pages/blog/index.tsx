import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Hello Welcome to my blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY.MM.DD")
          category
          author
        }
        excerpt(pruneLength: 80)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
