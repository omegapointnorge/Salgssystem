import { useEffect } from "react";
import { Observable } from "zen-observable-ts";
import { API, graphqlOperation } from "aws-amplify";
import { onSaveSalgssystemDevelopment } from "../graphql";
import Case from "../models/Case";

export const useSaveCaseSubscription = (
  handler: (caseObject: Case) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onSaveSalgssystemDevelopment)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onSaveSalgssystemDevelopment
        );
        handler(caseObject);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};
