import React, {useEffect} from "react";


const useContextMenu = (
  ref: React.RefObject<HTMLDivElement>, handleClick: () => void, handleContextMenu: (e: any) => void
  ) => {
    useEffect(() => {
      const currentRef = ref.current!;
      document.addEventListener("click", handleClick);
      currentRef.addEventListener("contextmenu", handleContextMenu);
      return () => {
        document.removeEventListener("click", handleClick);
        currentRef.removeEventListener("contextmenu", handleContextMenu);
      };
    }, [ref, handleClick, handleContextMenu]);
  
}

export default useContextMenu;