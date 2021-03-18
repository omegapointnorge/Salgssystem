/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onSaveSalgssystemDevelopment = /* GraphQL */ `
  subscription OnSaveSalgssystemDevelopment {
    onSaveSalgssystemDevelopment {
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
export const onDeleteSalgssystemDevelopment = /* GraphQL */ `
  subscription OnDeleteSalgssystemDevelopment(
    $ID: String
    $dato: String
    $ansvarlig: String
    $caseTags: [String]
    $frist: String
  ) {
    onDeleteSalgssystemDevelopment(
      ID: $ID
      dato: $dato
      ansvarlig: $ansvarlig
      caseTags: $caseTags
      frist: $frist
    ) {
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
