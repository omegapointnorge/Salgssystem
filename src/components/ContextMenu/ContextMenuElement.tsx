import React from "react";
import { IcontextMenuItem } from "../../common/types";
import TrashCan from "../TrashCan/TrashCan";
import styles from "./ContextMenu.module.css";


interface ContextMenuElementProps {
  menuItem: IcontextMenuItem;
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