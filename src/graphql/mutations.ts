/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const moveSalgsCase = /* GraphQL */ `
  mutation MoveSalgsCase($input: MoveSalgsCaseInput!) {
    moveSalgsCase(input: $input) {
      id
      ansvarlig
      caseTags
      frist
      kontakt
      kunde
      profilert
      laast
      status
      createdAt
      updatedAt
    }
  }
`;
export const createSalgsCase = /* GraphQL */ `
  mutation CreateSalgsCase(
    $input: CreateSalgsCaseInput!
    $condition: ModelSalgsCaseConditionInput
  ) {
    createSalgsCase(input: $input, condition: $condition) {
      id
      ansvarlig
      caseTags
      frist
      kontakt
      kunde
      profilert
      laast
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateSalgsCase = /* GraphQL */ `
  mutation UpdateSalgsCase(
    $input: UpdateSalgsCaseInput!
    $condition: ModelSalgsCaseConditionInput
  ) {
    updateSalgsCase(input: $input, condition: $condition) {
      id
      ansvarlig
      caseTags
      frist
      kontakt
      kunde
      profilert
      laast
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteSalgsCase = /* GraphQL */ `
  mutation DeleteSalgsCase(
    $input: DeleteSalgsCaseInput!
    $condition: ModelSalgsCaseConditionInput
  ) {
    deleteSalgsCase(input: $input, condition: $condition) {
      id
      ansvarlig
      caseTags
      frist
      kontakt
      kunde
      profilert
      laast
      status
      createdAt
      updatedAt
    }
  }
`;
