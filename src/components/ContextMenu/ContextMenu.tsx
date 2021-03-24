import React from "react";
import { IcontextMenuItem } from "../../common/types";
import useContextMenu from "../../hooks/CaseSubscription/useContextMenu";
import styles from "./ContextMenu.module.css";

interface ContextMenuProps {
  menu: IcontextMenuItem[];
  node: any;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  menu,
  node,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [xPos, setXPos] = React.useState("0px");
  const [yPos, setYPos] = React.useState("0px");


  const handleContextMenu = React.useCallback((e: any) => {
    e.preventDefault();
    const clickInside = node?.current?.contains(e.target);
    if (clickInside) {
      setXPos(`${e.layerX}px`);
      setYPos(`${e.offsetY}px`);
      setShowMenu(!showMenu);
      return;
    }
    setShowMenu(false);
  }, [node, showMenu]);

  const handleClick = React.useCallback((e) => {
    setShowMenu(false);
  }, []);

  useContextMenu(node, handleClick, handleContextMenu);

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
