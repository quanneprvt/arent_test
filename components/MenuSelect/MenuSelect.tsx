import React from "react";
import Image from "next/image";
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
        width={100}
        height={100}
      />
      <Box className={styles["menu-select-content"]}>
        <Image src={iconPath} alt={"menu icon"} width={50} height={50} />
        {text}
      </Box>
    </Box>
  );
};

export default MenuSelect;
