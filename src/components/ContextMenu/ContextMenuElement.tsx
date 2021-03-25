import React from "react";
import { IcontextMenuItem } from "../../common/types";
import TrashCan from "../TrashCan/TrashCan";
import styles from "./ContextMenu.module.css";


interface ContextMenuElementProps {
  menuItem: IcontextMenuItem;
  // node: any;
}

export const ContextMenuElement: React.FC<ContextMenuElementProps> = ({ menuItem }) => {
  
  const [hover, setHover] = React.useState(false);

  const htmlElements = [
    {
      id: "TrashCan",
      htmlElement: <TrashCan size="s" hover={hover} />,
    },
  ];

  const findHtmlElement = (menuItem: any) => {
    console.log(typeof menuItem);
    const foundElement = htmlElements.find(
      (element) => element.id === menuItem.htmlElementID
    );

    console.log(foundElement);
    console.log(foundElement?.htmlElement);
    console.log(foundElement?.id);

    return foundElement?.htmlElement;
  };


  return (
    <div
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    className={styles.menuElement}
    key={menuItem.id}
    onClick={() => {
      menuItem.callback(menuItem.name);
    }}
  >
    {findHtmlElement(menuItem)}
    {/* {test = htmlElements.find(
      (element) => (element.id === menuItem.htmlElementID)
    )} */}
    {/* {test && console.log(test)} */}

    {/* {htmlElements[0].htmlElement} */}

    <span className={styles.menuText}>{menuItem.name}</span>
    {menuItem.image && (
      <img
        src={menuItem.image}
        alt="avatar"
        className={styles.avatar}
      />
    )}
  </div>
  )

}