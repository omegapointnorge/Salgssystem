/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type MoveSalgsCaseInput = {
  id: string,
  ansvarlig?: string | null,
  caseTags?: Array< string > | null,
  frist?: string | null,
  kontakt?: string | null,
  kunde?: string | null,
  profilert?: Array< string > | null,
  status: Status,
};

export enum Status {
  UNASSIGNED = "UNASSIGNED",
  PABEGYNT = "PÅBEGYNT",
  VUNNET = "VUNNET",
  TAPT = "TAPT",
}


export type SalgsCase = {
  __typename: "SalgsCase",
  id?: string,
  ansvarlig?: string | null,
  caseTags?: Array< string > | null,
  frist?: string | null,
  kontakt?: string | null,
  kunde?: string | null,
  profilert?: Array< string > | null,
  status?: Status,
  createdAt?: string,
  updatedAt?: string,
};

export type CreateSalgsCaseInput = {
  id?: string | null,
  ansvarlig?: string | null,
  caseTags?: Array< string > | null,
  frist?: string | null,
  kontakt?: string | null,
  kunde?: string | null,
  profilert?: Array< string > | null,
  status: Status,
};

export type ModelSalgsCaseConditionInput = {
  ansvarlig?: ModelStringInput | null,
  caseTags?: ModelStringInput | null,
  frist?: ModelStringInput | null,
  kontakt?: ModelStringInput | null,
  kunde?: ModelStringInput | null,
  profilert?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSalgsCaseConditionInput | null > | null,
  or?: Array< ModelSalgsCaseConditionInput | null > | null,
  not?: ModelSalgsCaseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateSalgsCaseInput = {
  id: string,
  ansvarlig?: string | null,
  caseTags?: Array< string > | null,
  frist?: string | null,
  kontakt?: string | null,
  kunde?: string | null,
  profilert?: Array< string > | null,
  status?: Status | null,
};

export type DeleteSalgsCaseInput = {
  id?: string | null,
};

export type ModelSalgsCaseFilterInput = {
  id?: ModelIDInput | null,
  ansvarlig?: ModelStringInput | null,
  caseTags?: ModelStringInput | null,
  frist?: ModelStringInput | null,
  kontakt?: ModelStringInput | null,
  kunde?: ModelStringInput | null,
  profilert?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSalgsCaseFilterInput | null > | null,
  or?: Array< ModelSalgsCaseFilterInput | null > | null,
  not?: ModelSalgsCaseFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSalgsCaseConnection = {
  __typename: "ModelSalgsCaseConnection",
  items?:  Array<SalgsCase | null > | null,
  nextToken?: string | null,
};

export type MoveSalgsCaseMutationVariables = {
  input?: MoveSalgsCaseInput,
};

export type MoveSalgsCaseMutation = {
  moveSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSalgsCaseMutationVariables = {
  input?: CreateSalgsCaseInput,
  condition?: ModelSalgsCaseConditionInput | null,
};

export type CreateSalgsCaseMutation = {
  createSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSalgsCaseMutationVariables = {
  input?: UpdateSalgsCaseInput,
  condition?: ModelSalgsCaseConditionInput | null,
};

export type UpdateSalgsCaseMutation = {
  updateSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSalgsCaseMutationVariables = {
  input?: DeleteSalgsCaseInput,
  condition?: ModelSalgsCaseConditionInput | null,
};

export type DeleteSalgsCaseMutation = {
  deleteSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSalgsCaseQueryVariables = {
  id?: string,
};

export type GetSalgsCaseQuery = {
  getSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSalgsCasesQueryVariables = {
  filter?: ModelSalgsCaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalgsCasesQuery = {
  listSalgsCases?:  {
    __typename: "ModelSalgsCaseConnection",
    items?:  Array< {
      __typename: "SalgsCase",
      id: string,
      ansvarlig?: string | null,
      caseTags?: Array< string > | null,
      frist?: string | null,
      kontakt?: string | null,
      kunde?: string | null,
      profilert?: Array< string > | null,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnMoveSalgsCaseSubscription = {
  onMoveSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSalgsCaseSubscription = {
  onCreateSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSalgsCaseSubscription = {
  onUpdateSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSalgsCaseSubscription = {
  onDeleteSalgsCase?:  {
    __typename: "SalgsCase",
    id: string,
    ansvarlig?: string | null,
    caseTags?: Array< string > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string > | null,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};
