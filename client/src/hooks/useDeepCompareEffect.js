import { useEffect } from "react";
import { isEqual } from "lodash";
import { usePrevious } from ".";

const useDeepCompareEffect = (callback, obj) => {
  const previousObj = usePrevious(obj);
  useEffect(() => {
    if (previousObj && !isEqual(previousObj, obj)) {
      callback();
    }
  }, [obj, previousObj, callback]);
};

export default useDeepCompareEffect;
