import React from "react";
import { IcontextMenuItem } from "../../common/types";
import useContextMenu from "../../hooks/useContextMenu";
import styles from "./ContextMenu.module.css";
import { ContextMenuElement } from "./ContextMenuElement";

interface ContextMenuProps {
  menu: IcontextMenuItem[];
  node: any;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ menu, node }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [xPos, setXPos] = React.useState("0px");
  const [yPos, setYPos] = React.useState("0px");

  // const [hover, setHover] = React.useState(false);

  // const htmlElements = [
  //   {
  //     id: "TrashCan",
  //     htmlElement: <TrashCan size="s" hover={hover} />,
  //   },
  // ];

  // const selectedHtmlElement = htmlElements.find(
  //   (element) => element.name === ansvarlig
  // )?.image;

  const handleContextMenu = React.useCallback(
    (e: any) => {
      e.preventDefault();
      const clickInside = node?.current?.contains(e.target);
      if (clickInside) {
        setXPos(`${e.layerX}px`);
        setYPos(`${e.offsetY}px`);
        setShowMenu(!showMenu);
        return;
      }
      setShowMenu(false);
    },
    [node, showMenu]
  );

  const handleClick = React.useCallback((e) => {
    setShowMenu(false);
  }, []);

  useContextMenu(node, handleClick, handleContextMenu);

  let test = null;

  // const findHtmlElement = (menuItem: any) => {
  //   console.log(typeof menuItem);
  //   const foundElement = htmlElements.find(
  //     (element) => element.id === menuItem.htmlElementID
  //   );

  //   console.log(foundElement);
  //   console.log(foundElement?.htmlElement);
  //   console.log(foundElement?.id);

  //   return foundElement?.htmlElement;
  // };

  if (showMenu) {
    return (
      <div
        className={styles.menuContainer}
        style={{
          top: yPos,
          left: xPos,
        }}
      >
        {menu.map((menuItem) => (
          // <div
          //   onMouseEnter={() => setHover(true)}
          //   onMouseLeave={() => setHover(false)}
          //   className={styles.menuElement}
          //   key={menuItem.id}
          //   onClick={() => {
          //     menuItem.callback(menuItem.name);
          //   }}
          // >
          //   {findHtmlElement(menuItem)}
          //   {/* {test = htmlElements.find(
          //     (element) => (element.id === menuItem.htmlElementID)
          //   )} */}
          //   {/* {test && console.log(test)} */}

          //   {/* {htmlElements[0].htmlElement} */}

          //   <span className={styles.menuText}>{menuItem.name}</span>
          //   {menuItem.image && (
          //     <img
          //       src={menuItem.image}
          //       alt="avatar"
          //       className={styles.avatar}
          //     />
          //   )}
          // </div>
          <ContextMenuElement menuItem={menuItem} />
        ))}
      </div>
    );
  } else return null;
};
