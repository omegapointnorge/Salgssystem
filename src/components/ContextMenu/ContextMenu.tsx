import React from "react";
import { IcontextMenuItem } from "../../common/types";
import styles from "./ContextMenu.module.css";

interface ContextMenuProps {
  menu: IcontextMenuItem[];
  xPos: string;
  yPos: string;
  showMenu: boolean;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  menu,
  xPos,
  yPos,
  showMenu,
}) => {
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
          <div
            className={styles.menuElement}
            key={menuItem.id}
            onClick={() => {
              menuItem.callback(menuItem.name);
            }}
          >
            <span className={styles.menuText}>{menuItem.name}</span>
            <img src={menuItem.image} alt="avatar" className={styles.avatar} />
          </div>
        ))}
      </div>
    );
  } else return null;
};
