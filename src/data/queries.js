/* eslint-disable import/prefer-default-export */

import gql from 'graphql-tag';

export const FETCH_SUBJECTS = gql`
  query FetchSubjects($first: Int, $after: String) {
    subjects(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Subject {
            subject
            description
            unit
            group
          }
        }
      }
    }
  }
`;

export const FETCH_COURSES = gql`
  query FetchCourses(
    $subject: String
    $after: String
    $first: Int
    $keyword: String
  ) {
    courses(
      subject: $subject
      after: $after
      first: $first
      keyword: $keyword
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Course {
            subject
            catalogNumber
            title
          }
        }
      }
    }
  }
`;
