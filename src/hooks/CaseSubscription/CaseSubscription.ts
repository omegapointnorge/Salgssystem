import { useEffect } from "react";
import { Observable } from "zen-observable-ts";
import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateSalgsCase,
  onUpdateSalgsCase,
  onMoveSalgsCase,
  onDeleteSalgsCase,
} from "../../graphql";
import Case from "../../models/Case";

export const useCreateCaseSubscription = (
  handler: (caseObject: Case) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onCreateSalgsCase)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onCreateSalgsCase
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
      graphqlOperation(onUpdateSalgsCase)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onUpdateSalgsCase
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
      graphqlOperation(onMoveSalgsCase)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onMoveSalgsCase
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
      graphqlOperation(onDeleteSalgsCase)
    ) as Observable<object>).subscribe({
      next: (data: any) => {
        const caseObject = new Case(
          data.value.data.onDeleteSalgsCase
        );
        handler(caseObject);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};
