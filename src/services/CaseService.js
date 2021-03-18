import Case from "../models/Case";
import { API, graphqlOperation } from "aws-amplify";
import {
  listSalgssystemDevelopments,
  saveSalgssystemDevelopment,
  deleteSalgssystemDevelopment,
} from "../graphql";

export async function getCases() {
  try {
    const cases = (
      await API.graphql(graphqlOperation(listSalgssystemDevelopments))
    ).data.listSalgssystemDevelopments.items;
    return cases.map((caseObject) => new Case(caseObject));
  } catch (error) {
    console.error("Failed to get cases from database", error);
  }
}

export async function saveCase(caseObject) {
  try {
    const result = await API.graphql(
      graphqlOperation(saveSalgssystemDevelopment, {
        input: caseObject,
      })
    );
    console.log("SAVED CASE");
    return result;
  } catch (error) {
    console.error(`Failed to save case: ${caseObject.ID} in database`, error);
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
