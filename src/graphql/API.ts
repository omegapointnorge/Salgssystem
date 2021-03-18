/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SaveSalgssystemDevelopmentInput = {
  ID: string,
  dato: string,
  ansvarlig?: string | null,
  caseTags?: Array< string | null > | null,
  frist?: string | null,
  kontakt?: string | null,
  kunde?: string | null,
  profilert?: Array< string | null > | null,
  status?: string | null,
};

export type SalgssystemDevelopment = {
  __typename: "SalgssystemDevelopment",
  ID?: string,
  dato?: string,
  ansvarlig?: string | null,
  caseTags?: Array< string | null > | null,
  frist?: string | null,
  kontakt?: string | null,
  kunde?: string | null,
  profilert?: Array< string | null > | null,
  status?: string | null,
};

export type DeleteSalgssystemDevelopmentInput = {
  ID: string,
  dato: string,
};

export type TableSalgssystemDevelopmentFilterInput = {
  ID?: TableStringFilterInput | null,
  dato?: TableStringFilterInput | null,
  ansvarlig?: TableStringFilterInput | null,
  caseTags?: TableStringFilterInput | null,
  frist?: TableStringFilterInput | null,
  kontakt?: TableStringFilterInput | null,
  kunde?: TableStringFilterInput | null,
  profilert?: TableStringFilterInput | null,
  status?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
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
};

export type SalgssystemDevelopmentConnection = {
  __typename: "SalgssystemDevelopmentConnection",
  items?:  Array<SalgssystemDevelopment | null > | null,
  nextToken?: string | null,
};

export type SaveSalgssystemDevelopmentMutationVariables = {
  input?: SaveSalgssystemDevelopmentInput,
};

export type SaveSalgssystemDevelopmentMutation = {
  saveSalgssystemDevelopment?:  {
    __typename: "SalgssystemDevelopment",
    ID: string,
    dato: string,
    ansvarlig?: string | null,
    caseTags?: Array< string | null > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string | null > | null,
    status?: string | null,
  } | null,
};

export type DeleteSalgssystemDevelopmentMutationVariables = {
  input?: DeleteSalgssystemDevelopmentInput,
};

export type DeleteSalgssystemDevelopmentMutation = {
  deleteSalgssystemDevelopment?:  {
    __typename: "SalgssystemDevelopment",
    ID: string,
    dato: string,
    ansvarlig?: string | null,
    caseTags?: Array< string | null > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string | null > | null,
    status?: string | null,
  } | null,
};

export type GetSalgssystemDevelopmentQueryVariables = {
  ID?: string,
  dato?: string,
};

export type GetSalgssystemDevelopmentQuery = {
  getSalgssystemDevelopment?:  {
    __typename: "SalgssystemDevelopment",
    ID: string,
    dato: string,
    ansvarlig?: string | null,
    caseTags?: Array< string | null > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string | null > | null,
    status?: string | null,
  } | null,
};

export type ListSalgssystemDevelopmentsQueryVariables = {
  filter?: TableSalgssystemDevelopmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalgssystemDevelopmentsQuery = {
  listSalgssystemDevelopments?:  {
    __typename: "SalgssystemDevelopmentConnection",
    items?:  Array< {
      __typename: "SalgssystemDevelopment",
      ID: string,
      dato: string,
      ansvarlig?: string | null,
      caseTags?: Array< string | null > | null,
      frist?: string | null,
      kontakt?: string | null,
      kunde?: string | null,
      profilert?: Array< string | null > | null,
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnSaveSalgssystemDevelopmentSubscription = {
  onSaveSalgssystemDevelopment?:  {
    __typename: "SalgssystemDevelopment",
    ID: string,
    dato: string,
    ansvarlig?: string | null,
    caseTags?: Array< string | null > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string | null > | null,
    status?: string | null,
  } | null,
};

export type OnDeleteSalgssystemDevelopmentSubscriptionVariables = {
  ID?: string | null,
  dato?: string | null,
  ansvarlig?: string | null,
  caseTags?: Array< string | null > | null,
  frist?: string | null,
};

export type OnDeleteSalgssystemDevelopmentSubscription = {
  onDeleteSalgssystemDevelopment?:  {
    __typename: "SalgssystemDevelopment",
    ID: string,
    dato: string,
    ansvarlig?: string | null,
    caseTags?: Array< string | null > | null,
    frist?: string | null,
    kontakt?: string | null,
    kunde?: string | null,
    profilert?: Array< string | null > | null,
    status?: string | null,
  } | null,
};
