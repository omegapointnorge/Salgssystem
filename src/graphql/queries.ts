/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSalgsCase = /* GraphQL */ `
  query GetSalgsCase($id: ID!) {
    getSalgsCase(id: $id) {
      id
      ansvarlig
      caseTags
      frist
      kontakt
      kunde
      profilert
      status
      createdAt
      updatedAt
    }
  }
`;
export const listSalgsCases = /* GraphQL */ `
  query ListSalgsCases(
    $filter: ModelSalgsCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalgsCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ansvarlig
        caseTags
        frist
        kontakt
        kunde
        profilert
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
