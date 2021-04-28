import React, {useState, useEffect} from "react";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import { IcontextMenuItem } from "../../common/types";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import styles from "./Ansvarlig.module.css";

interface AnsvarligProps {
  ansvarlig: string;
  laast: boolean | null | undefined;
  onChange: (ansvarlig: string) => void;
}

export const Ansvarlig: React.FC<AnsvarligProps> = ({
  ansvarlig,
  laast,
  onChange,
}) => {
  const contextMenuArray: IcontextMenuItem[] = [
    {
      id: 0,
      name: "Anniken",
      callback: (ansvarlig: string) => onChange(ansvarlig),
      image: avatar1
    },
    {
      id: 1,
      name: "Lotte",
      callback: (ansvarlig: string) => onChange(ansvarlig),
      image: avatar2
    },
    {
      id: 2,
      name: "Frida",
      callback: (ansvarlig: string) => onChange(ansvarlig),
      image: avatar3
    },
  ];

  const [isLaast, setLaast] = useState(laast);

  useEffect(() => {
  setLaast(laast)
  }, [laast]);

  const observed = React.useRef<HTMLDivElement>(null);

  const avatarImage = contextMenuArray.find(
    (element) => element.name === ansvarlig
  )?.image;

  function getMenu(){
    if(!isLaast)
      return <ContextMenu menu={contextMenuArray} node={observed} />
  }

  return (
    <div ref={observed}>
      {getMenu()}
      <div ref={observed} className={styles.ownerAvatar}>
        {avatarImage && (
          <img src={avatarImage} alt={`${ansvarlig}-avatar`} className={styles.ownerAvatar} />
        )}
      </div>
    </div>
  );
};
