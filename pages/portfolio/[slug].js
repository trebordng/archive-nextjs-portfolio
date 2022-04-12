import React from "react";
import { WorkCard } from "../../components";
import { getPosts, getPostDetails } from "../../services";

const PortfolioDetails = ({post}) => {
  return <WorkCard post={post} />
};
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
export default PortfolioDetails;
