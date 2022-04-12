import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GPAPHCMS_ENDPOINT;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      portfoliosConnection {
        edges {
          node {
            company
            description
            period
            title
            slug
            displayimage {
              url
            }
          }
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query);

  return results.portfoliosConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      portfolio(where: { slug: $slug }) {
        company
        description
        period
        title
        displayimage {
          url
        }
        image1{
            url
        }
        image2{
            url
        }
        image3{
            url
        }
        demo
        code
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.portfolio;
};
