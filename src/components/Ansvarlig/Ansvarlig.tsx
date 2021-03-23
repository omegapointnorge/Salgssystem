import React from "react";
import { connect } from "react-redux";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import styles from "./Ansvarlig.module.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import { IcontextMenuItem } from "../../common/types";
import { MenusOpenAction } from "../../redux/reducers/menusOpen";
import { setMenusOpen } from "../../redux/actions";

interface AnsvarligProps {
  ansvarlig: string;
  onChange: (ansvarlig: string) => void;
  menusOpen: boolean;
  setMenusOpen: (menusOpen: boolean) => void;
}

const Ansvarlig: React.FC<AnsvarligProps> = ({
  ansvarlig,
  onChange,
  menusOpen,
  setMenusOpen,
}) => {
  const contextMenuArray: IcontextMenuItem[] = [
    {
      id: 0,
      name: "Anniken",
      callback: (ansvarlig: string) => onChange(ansvarlig),
      image: avatar1,
    },
    {
      id: 1,
      name: "Lotte",
      callback: (ansvarlig: string) => onChange(ansvarlig),
      image: avatar2,
    },
    {
      id: 2,
      name: "Frida",
      callback: (ansvarlig: string) => onChange(ansvarlig),
      image: avatar3,
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);
  const [xPos, setXPos] = React.useState("0px");
  const [yPos, setYPos] = React.useState("0px");

  const observed = React.useRef<HTMLDivElement>(null);

  const handleContextMenu = React.useCallback(
    (e) => {
      e.preventDefault();
      setXPos(`${e.layerX}px`);
      setYPos(`${e.offsetY}px`);
      setShowMenu(true);
      setMenusOpen(true);
    },
    [setMenusOpen]
  );

  const handleClick = React.useCallback(() => {
    setShowMenu(false);
    setMenusOpen(false);
  }, []);

  React.useEffect(() => {
    const currentRef = observed.current!;
    document.addEventListener("click", handleClick);
    currentRef.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      currentRef.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleClick, handleContextMenu]);

  const avatarImage = contextMenuArray.find(
    (element) => element.name === ansvarlig
  )?.image;
  
  return (
    <>
      <ContextMenu
        menu={contextMenuArray}
        xPos={xPos}
        yPos={yPos}
        showMenu={showMenu}
      />
      <div ref={observed} className={styles.ownerAvatar}>
        {avatarImage && (
          <img src={avatarImage} alt="avatar" className={styles.ownerAvatar} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({
  menusOpenReducer,
}: {
  menusOpenReducer: MenusOpenAction;
}) => {
  return {
    menusOpen: menusOpenReducer.payload,
  };
};

export default connect(mapStateToProps, { setMenusOpen })(Ansvarlig);
