/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSalgssystemDevelopment = /* GraphQL */ `
  query GetSalgssystemDevelopment($ID: String!, $dato: String!) {
    getSalgssystemDevelopment(ID: $ID, dato: $dato) {
      ID
      dato
      ansvarlig
      caseTags
      frist
      kontakt
      kunde
      profilert
      status
    }
  }
`;
export const listSalgssystemDevelopments = /* GraphQL */ `
  query ListSalgssystemDevelopments(
    $filter: TableSalgssystemDevelopmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalgssystemDevelopments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ID
        dato
        ansvarlig
        caseTags
        frist
        kontakt
        kunde
        profilert
        status
      }
      nextToken
    }
  }
`;
