import { useEffect } from "react";
import { Observable } from "zen-observable-ts";
import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateSalgssystemDevelopment,
  onUpdateSalgssystemDevelopment,
  onMoveSalgssystemDevelopment,
  onDeleteSalgssystemDevelopment,
} from "../../graphql";
import Case from "../../models/Case";

export const useCreateCaseSubscription = (
  handler: (caseObject: Case) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onCreateSalgssystemDevelopment)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onCreateSalgssystemDevelopment
        );
        handler(caseObject);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};

export const useUpdateCaseSubscription = (
  handler: (caseObject: Case) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onUpdateSalgssystemDevelopment)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onUpdateSalgssystemDevelopment
        );
        handler(caseObject);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};

export const useMoveCaseSubscription = (
  handler: (caseObject: Case) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onMoveSalgssystemDevelopment)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onMoveSalgssystemDevelopment
        );
        handler(caseObject);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};

export const useDeleteCaseSubscription = (
  handler: (caseObject: Case) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onDeleteSalgssystemDevelopment)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onDeleteSalgssystemDevelopment
        );
        handler(caseObject);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};
