import React, {useEffect} from "react";


const useContextMenu = (
  ref: React.RefObject<HTMLDivElement>, handleClick: (e: any) => (void), handleContextMenu: (e: any) => void
  ) => {
    useEffect(() => {
      document.addEventListener("click", handleClick);
      document.addEventListener("contextmenu", handleContextMenu);
      return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("contextmenu", handleContextMenu);
      };
    }, [ref, handleClick, handleContextMenu]);
  
}

export default useContextMenu;