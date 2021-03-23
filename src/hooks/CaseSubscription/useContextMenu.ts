import React, {useEffect} from "react";


const useContextMenu = (
  ref: React.RefObject<HTMLDivElement>, handleClick: () => void, handleContextMenu: (e: any) => void
  ) => {
    console.log(ref);
    useEffect(() => {
      const currentRef = ref.current!;
      console.log(currentRef);
      document.addEventListener("click", handleClick);
      currentRef.addEventListener("contextmenu", handleContextMenu);
      return () => {
        document.removeEventListener("click", handleClick);
        currentRef.removeEventListener("contextmenu", handleContextMenu);
      };
    }, [ref, handleClick, handleContextMenu]);
  
}

export default useContextMenu;