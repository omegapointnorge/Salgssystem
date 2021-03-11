import React from "react";
// import { IcontextMenuItem } from "src/common/types";
// import { ContextMenu } from "../ContextMenu/ContextMenu";
import styles from "./Ansvarlig.module.css";

interface CaseCardProps {
  ansvarlig: string;
}

export const Ansvarlig: React.FC<CaseCardProps> = ({ ansvarlig }) => {
  // const contextMenuArray: IcontextMenuItem[] = [
  //   { id: 0, name: "Slett", callback: () => console.log("Clicked item 1") },
  //   { id: 1, name: "Lagre", callback: () => console.log("Clicked item 2") },
  //   { id: 2, name: "Rediger", callback: () => console.log("Clicked item 3") },
  // ];

  const [showMenu, setShowMenu] = React.useState(false);
  const [xPos, setXPos] = React.useState("0px");
  const [yPos, setYPos] = React.useState("0px");

  console.log(xPos + " " + yPos);

  const observed = React.useRef<HTMLDivElement>(null);

  const handleContextMenu = React.useCallback(
    (e) => {
      console.log({ e });
      e.preventDefault();
      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = React.useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  React.useEffect(() => {
    console.log(observed.current);
    const currentRef = observed.current!;
    currentRef.addEventListener("click", handleClick);
    currentRef.addEventListener("contextmenu", handleContextMenu);
    return () => {
      currentRef.removeEventListener("click", handleClick);
      currentRef.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   console.log(e.type);
  // };

  return (
    <>
      <div
        ref={observed}
        // onClick={(e) => handleClick(e)}
        className={styles.ownerAvatar}
      >
        {ansvarlig}
      </div>
    </>
  );
};
