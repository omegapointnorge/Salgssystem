import { useEffect } from "react";
import * as _ from "lodash";
import { usePrevious } from ".";

const useDeepCompareEffect = (callback, obj) => {
  const previousObj = usePrevious(obj);
  useEffect(() => {
    if (previousObj && !_.isEqual(previousObj, obj)) {
      callback(obj);
    }
  }, [obj, previousObj, callback]);
};

export default useDeepCompareEffect;
