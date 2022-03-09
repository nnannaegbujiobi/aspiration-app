import { gql } from '@apollo/client';

export const GET_RELATED_TOPICS = gql`
  query getRelatedTopics($name: String!) {
      topic(name: $name) {
          stargazerCount,
          relatedTopics(first: 10) {
              name
          }
      }
  }
`;