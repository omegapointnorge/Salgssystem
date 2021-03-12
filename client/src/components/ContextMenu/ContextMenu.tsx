import React from "react";
// import React, { useState, useCallback, useEffect } from "react";
import { IcontextMenuItem } from "src/common/types";
import styles from "./ContextMenu.module.css";

interface ContextMenuProps {
  menu: IcontextMenuItem[];
  xPos: string;
  yPos: string;
  showMenu: boolean;
  // ref: RefObject<unknown>;
}

// const useContextMenu = () => {
//   const [xPos, setXPos] = useState("0px");
//   const [yPos, setYPos] = useState("0px");
//   const [showMenu, setShowMenu] = useState(false);

//   const handleContextMenu = useCallback(
//     (e) => {
//     console.log({e})
//       e.preventDefault();
//       setXPos(`${e.pageX}px`);
//       setYPos(`${e.pageY}px`);
//       setShowMenu(true);
//     },
//     [setXPos, setYPos]
//   );

//   const handleClick = useCallback(() => {
//     showMenu && setShowMenu(false);
//   }, [showMenu]);

//   useEffect(() => {
//     document.addEventListener("click", handleClick);
//     document.addEventListener("contextmenu", handleContextMenu);
//     return () => {
//       document.addEventListener("click", handleClick);
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   });

//   return { xPos, yPos, showMenu };
// };

// Kan utvides til å ta inn ikoner og lignedne, bare legge på en <span> i <li> elementet tenker jeg

// Må ha noe som gjør at normale click også kan brukes?
export const ContextMenu: React.FC<ContextMenuProps> = ({ menu, xPos, yPos, showMenu }) => {


  console.log("Kjører ContextMenu");
  // const { xPos, yPos, showMenu } = useContextMenu();

  // console.log({ref});

  console.log({showMenu});

  if (showMenu) {
    return (
      <div
        className={styles.menuContainer}
        style={{
          top: yPos,
          left: xPos,
        }}
      >
        <ul>
          {menu.map((menuItem) => (
            <li
              key={menuItem.id}
              onClick={() => {
                menuItem.callback();
              }}
            >
              {menuItem.name}
            </li>
          ))}
        </ul>
      </div>
    );
  } else return null;
};
