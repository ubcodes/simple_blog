import { request, gql } from 'graphql-request'

const graphqlAPI: any = process.env.NEXT_PUBLIC_HYGRAPHCMS_ENDPOINT ;

export const getPosts = async (): Promise<any> => {
    const query: any = gql` 
    query MyQuery {
  postsConnection {
    edges {
      node {
        slug
        title
        featuredImage {
          url
        }
      }
    }
  }
}

    `

    const result: any = await request(graphqlAPI, query) // graphqlAPI is the endpoint where you serve your GraphQL API

    return result.postsConnection.edges;
}


export const getPostDetails = async (slug: string): Promise<any> => {
    const query = gql `
        query GetPostDetails($slug: String!) {
  post(where: {slug: $slug}) { 
    title
    createdAt
    slug
    featuredImage {
      url
    }
    author {
      name
      bio
      photo {
        url
      }
    }
    content{
      raw
    }
  }
}

    `;


const result: any = await request (graphqlAPI, query, {slug});

return result.post;
};