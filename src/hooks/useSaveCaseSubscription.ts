import { useEffect, /*useCallback*/ } from "react";
import { Observable } from "zen-observable-ts";
import { API, graphqlOperation } from "aws-amplify";
import { onSaveSalgssystemDevelopment } from "../graphql";
import Case from "../models/Case";
// import { IColumnList } from "../common/types";

export const useSaveCaseSubscription = (
  handler: (caseObject: Case) => void
) => {
  //   const createSubscription = useCallback(() => {
  //     const observable = API.graphql(
  //       graphqlOperation(onSaveSalgssystemDevelopment)
  //     ) as Observable<object>;
  //     return observable.subscribe({
  //       next: (next: any) => {
  //         try {
  //   const caseObject = new Case(
  //     next?.value?.data?.onSaveSalgssystemDevelopment
  //   );
  //           handler(caseObject);
  //         } catch (error) {
  //           console.error("Noe gikk galt i onSave subscription", error);
  //         }
  //       },
  //     });
  //   }, [handler]);

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
  }, []);
};
