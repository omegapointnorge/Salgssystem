import { useEffect } from "react";
import { Observable } from "zen-observable-ts";
import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateSalgsCase,
  onUpdateSalgsCase,
  onMoveSalgsCase,
  onDeleteSalgsCase,
} from "../graphql/subscriptions";
import {
  SalgsCase,
  OnCreateSalgsCaseSubscription,
  OnUpdateSalgsCaseSubscription,
  OnMoveSalgsCaseSubscription,
  OnDeleteSalgsCaseSubscription,
} from "../graphql/API";

export const useCreateCaseSubscription = (
  handler: (caseObject: SalgsCase) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onCreateSalgsCase)
    ) as Observable<object>).subscribe({
      next: (next: any) => {
        const subValue: OnCreateSalgsCaseSubscription = next.value.data;
        handler(subValue.onCreateSalgsCase!);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};

export const useUpdateCaseSubscription = (
  handler: (caseObject: SalgsCase) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onUpdateSalgsCase)
    ) as Observable<object>).subscribe({
      next: (next: any) => {
        const subValue: OnUpdateSalgsCaseSubscription = next.value.data;
        handler(subValue.onUpdateSalgsCase!);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};

export const useMoveCaseSubscription = (
  handler: (caseObject: SalgsCase) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onMoveSalgsCase)
    ) as Observable<object>).subscribe({
      next: (next: any) => {
        const subValue: OnMoveSalgsCaseSubscription = next.value.data;
        handler(subValue.onMoveSalgsCase!);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};

export const useDeleteCaseSubscription = (
  handler: (caseObject: SalgsCase) => void
) => {
  useEffect(() => {
    const subscription = (API.graphql(
      graphqlOperation(onDeleteSalgsCase)
    ) as Observable<object>).subscribe({
      next: (next: any) => {
        const subValue: OnDeleteSalgsCaseSubscription = next.value.data;
        handler(subValue.onDeleteSalgsCase!);
      },
    });
    return () => subscription.unsubscribe();
  }, [handler]);
};
