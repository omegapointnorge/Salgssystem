/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSalgssystemDevelopment = /* GraphQL */ `
  subscription OnCreateSalgssystemDevelopment(
    $ID: String
    $dato: String
    $ansvarlig: String
    $caseTags: [String]
    $frist: String
  ) {
    onCreateSalgssystemDevelopment(
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
export const onUpdateSalgssystemDevelopment = /* GraphQL */ `
  subscription OnUpdateSalgssystemDevelopment(
    $ID: String
    $dato: String
    $ansvarlig: String
    $caseTags: [String]
    $frist: String
  ) {
    onUpdateSalgssystemDevelopment(
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
