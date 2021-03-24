import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import {
  listSalgsCases,
  createSalgsCase,
  updateSalgsCase,
  moveSalgsCase,
  deleteSalgsCase,
} from "../graphql";
import * as GqlTypes from "../graphql/API";

export async function listCases(): Promise<
  Array<GqlTypes.SalgsCase | null> | null | undefined
> {
  try {
    const result = (await API.graphql(
      graphqlOperation(listSalgsCases)
    )) as GraphQLResult;
    const data = result.data as GqlTypes.ListSalgsCasesQuery;
    return await data.listSalgsCases?.items;
  } catch (error) {
    console.error("Failed to get cases from database", error);
  }
}

export async function createCase(caseObject: GqlTypes.SalgsCase) {
  try {
    const result = await API.graphql(
      graphqlOperation(createSalgsCase, {
        input: caseObject,
      })
    );
    return result;
  } catch (error) {
    console.error(`Failed to create case: ${caseObject.id} in database`, error);
  }
}

export async function updateCase(caseObject: GqlTypes.SalgsCase) {
  try {
    const result = await API.graphql(
      graphqlOperation(updateSalgsCase, {
        input: caseObject,
      })
    );
    return result;
  } catch (error) {
    console.error(`Failed to update case: ${caseObject.id} in database`, error);
  }
}

export async function moveCase(caseObject: GqlTypes.SalgsCase) {
  try {
    const result = await API.graphql(
      graphqlOperation(moveSalgsCase, {
        input: caseObject,
      })
    );
    return result;
  } catch (error) {
    console.error(`Failed to move case: ${caseObject.id} in database`, error);
  }
}

export async function deleteCase({ id }: GqlTypes.SalgsCase) {
  try {
    return await API.graphql(
      graphqlOperation(deleteSalgsCase, {
        input: { id },
      })
    );
  } catch (error) {
    console.error(`Failed to delete case: ${id} from database`, error);
  }
}
