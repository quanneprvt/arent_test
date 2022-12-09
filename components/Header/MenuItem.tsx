import React from "react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  title: string;
  iconSrc?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, iconSrc }) => {
  return (
    <IconButton className={styles["menu-item-wrp"]}>
      <Image
        src={iconSrc || ""}
        alt={`${title}-menu-icon`}
        width={20}
        height={20}
      />
      {title}
    </IconButton>
  );
};

export default MenuItem;
