import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { listSalgsCases } from "../graphql/queries";
import {
  createSalgsCase,
  updateSalgsCase,
  moveSalgsCase,
  deleteSalgsCase,
} from "../graphql/mutations";
import * as GqlTypes from "../graphql/API";

export async function listCases() {
  try {
    const result = (await API.graphql(
      graphqlOperation(listSalgsCases)
    )) as GraphQLResult;
    const data = (await result.data) as GqlTypes.ListSalgsCasesQuery;
    return (await data.listSalgsCases?.items) as GqlTypes.SalgsCase[];
  } catch (error) {
    console.error("Failed to get cases from database", error);
  }
}

export async function createCase() {
  try {
    const result = (await API.graphql(
      graphqlOperation(createSalgsCase, {
        input: {
          status: GqlTypes.Status.UNASSIGNED,
        },
      })
    )) as GraphQLResult;
    const data = (await result.data) as GqlTypes.CreateSalgsCaseMutation;
    const caseObject = await data.createSalgsCase;
    return caseObject;
  } catch (error) {
    console.error("Failed to create case in database", error);
  }
}

export async function updateCase(caseObject: GqlTypes.SalgsCase) {
  const { createdAt, updatedAt, ...updateInput } = caseObject;

  try {
    const result = await API.graphql(
      graphqlOperation(updateSalgsCase, {
        input: updateInput,
      })
    );
    return result;
  } catch (error) {
    console.error(`Failed to update case: ${updateInput.id} in database`, error);
  }
}

export async function moveCase(caseObject: GqlTypes.SalgsCase) {
  const { createdAt, updatedAt, ...updateInput } = caseObject;

  try {
    const result = await API.graphql(
      graphqlOperation(moveSalgsCase, {
        input: updateInput,
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
