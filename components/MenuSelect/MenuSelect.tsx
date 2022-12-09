import React from "react";
import Image from "next/image";
import ImageLegacy from "next/legacy/image";
import { Box } from "@mui/material";
import styles from "./MenuSelect.module.scss";

interface MenuSelectProps {
  iconPath: string;
  text: string;
}

const MenuSelect: React.FC<MenuSelectProps> = ({ iconPath, text }) => {
  return (
    <Box className={styles["menu-select-wrp"]}>
      <Image
        src={"/images/menu/background.svg"}
        alt={"menu-background"}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Box className={styles["menu-select-content"]}>
        <ImageLegacy src={iconPath} alt={"menu icon"} width={80} height={80} />
        {text}
      </Box>
    </Box>
  );
};

export default MenuSelect;
