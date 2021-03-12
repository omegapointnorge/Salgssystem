import React from "react";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { IcontextMenuItem } from "src/common/types";
// import { ContextMenu } from "../ContextMenu/ContextMenu";
import styles from "./Ansvarlig.module.css";

interface CaseCardProps {
  ansvarlig: string;
}

export const Ansvarlig: React.FC<CaseCardProps> = ({ ansvarlig }) => {
  const contextMenuArray: IcontextMenuItem[] = [
    { id: 0, name: "Slett", callback: () => console.log("Clicked item 1") },
    { id: 1, name: "Lagre", callback: () => console.log("Clicked item 2") },
    { id: 2, name: "Rediger", callback: () => console.log("Clicked item 3") },
  ];

  const [showMenu, setShowMenu] = React.useState(false);
  const [xPos, setXPos] = React.useState("0px");
  const [yPos, setYPos] = React.useState("0px");

  // const [xOffset, setXOffset] = React.useState("0px");
  // const [yOffset, setYOffset] = React.useState("0px");

  const observed = React.useRef<HTMLDivElement>(null);
  // const currentRef = observed.current!;

  const handleContextMenu = React.useCallback(
    (e) => {
      // console.log({ e });
      // console.log(xPos + " " + yPos); // Blir allitd det samme?
      // if (currentRef) {
      //   console.log(currentRef.getBoundingClientRect());
      // }
      e.preventDefault();
      setXPos(`${e.layerX}px`);
      setYPos(`${e.offsetY}px`);

      // setXOffset(`${e.layerX}px`);
      // setYOffset(`${e.offsetY}px`);

      console.log("SETTER TIL TRUE!!");
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = React.useCallback(() => {
    console.log("HANDLE CLICK");
    showMenu && setShowMenu(false);
    console.log("Blir jeg satt til FALSE?: ", showMenu);
  }, [showMenu]);

  React.useEffect(() => {
    // console.log(observed.current);
    const currentRef = observed.current!;
    // console.log(xPos + " " + yPos);
    // console.log(currentRef.getBoundingClientRect());
    currentRef.addEventListener("click", handleClick);
    currentRef.addEventListener("contextmenu", handleContextMenu);
    return () => {
      currentRef.removeEventListener("click", handleClick);
      currentRef.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // React.useEffect(() => {
  //   console.log("Update");
  //   renderContextMenu();
  // }, [showMenu, contextMenuArray, xPos, yPos]);

  // const renderContextMenu = () => {
  //   console.log("RENDER");
  //   return (
  //     <ContextMenu
  //       menu={contextMenuArray}
  //       xPos={xPos}
  //       yPos={yPos}
  //       showMenu={showMenu}
  //     />
  //   );
  // };

  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   console.log(e.type);
  // };

  React.useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log({showMenu});
  }, [showMenu]) 

  console.log("showMenu in Ansvarlig.js: ", showMenu);

  return (
    <>
      <ContextMenu
        menu={contextMenuArray}
        xPos={xPos}
        yPos={yPos}
        showMenu={showMenu}
      />
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
