import React from "react";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import { IcontextMenuItem } from "../../common/types";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import styles from "./Ansvarlig.module.css";

interface AnsvarligProps {
  ansvarlig: string;
  onChange: (ansvarlig: string) => void;
}

export const Ansvarlig: React.FC<AnsvarligProps> = ({
  ansvarlig,
  onChange,
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

  const observed = React.useRef<HTMLDivElement>(null);

  const avatarImage = contextMenuArray.find(
    (element) => element.name === ansvarlig
  )?.image;

  return (
    <div ref={observed}>
      <ContextMenu menu={contextMenuArray} node={observed} />
      <div ref={observed} className={styles.ownerAvatar}>
        {avatarImage && (
          <img src={avatarImage} alt="avatar" className={styles.ownerAvatar} />
        )}
      </div>
    </div>
  );
};
