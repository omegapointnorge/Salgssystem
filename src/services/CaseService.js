import Case from "../models/Case";
import { API, graphqlOperation } from "aws-amplify";
import {
  listSalgssystemDevelopments,
  createSalgssystemDevelopment,
  updateSalgssystemDevelopment,
  moveSalgssystemDevelopment,
  deleteSalgssystemDevelopment,
} from "../graphql";

export async function listCases() {
  try {
    const cases = (
      await API.graphql(graphqlOperation(listSalgssystemDevelopments))
    ).data.listSalgssystemDevelopments.items;
    return cases.map((caseObject) => new Case(caseObject));
  } catch (error) {
    console.error("Failed to get cases from database", error);
  }
}

export async function createCase(caseObject) {
  try {
    const result = await API.graphql(
      graphqlOperation(createSalgssystemDevelopment, {
        input: caseObject,
      })
    );
    return result;
  } catch (error) {
    console.error(`Failed to create case: ${caseObject.ID} in database`, error);
  }
}

export async function updateCase(caseObject) {
  try {
    const result = await API.graphql(
      graphqlOperation(updateSalgssystemDevelopment, {
        input: caseObject,
      })
    );
    return result;
  } catch (error) {
    console.error(`Failed to update case: ${caseObject.ID} in database`, error);
  }
}

export async function moveCase(caseObject) {
  try {
    const result = await API.graphql(
      graphqlOperation(moveSalgssystemDevelopment, {
        input: caseObject,
      })
    );
    return result;
  } catch (error) {
    console.error(`Failed to move case: ${caseObject.ID} in database`, error);
  }
}

export async function deleteCase({ ID, dato }) {
  try {
    return await API.graphql(
      graphqlOperation(deleteSalgssystemDevelopment, {
        input: { ID, dato },
      })
    );
  } catch (error) {
    console.error(`Failed to delete case: ${ID} from database`, error);
  }
}
