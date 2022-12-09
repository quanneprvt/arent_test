import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./MenuThumbnail.module.scss";

interface MenuThumbnailProps {
  src: string;
  title: string;
  description?: string;
  tags?: string[];
}

const MenuThumbnail: React.FC<MenuThumbnailProps> = ({ src, title }) => {
  return (
    <Box className={styles["menu-thumb-wrp"]}>
      <Image
        alt="menu-display"
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className={styles["img-wrp"]}
      />
      <Box className={styles["title-wrp"]}>{title}</Box>
    </Box>
  );
};

export default MenuThumbnail;
