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

const MenuThumbnail: React.FC<MenuThumbnailProps> = ({
  src,
  title,
  description,
  tags,
}) => {
  return (
    <Box className={styles["menu-thumb-wrp"]}>
      <Box className={styles["img-title-wrp"]}>
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
      {description && <Box className={styles["desc"]}>{description}</Box>}
      {tags?.length && (
        <Box className={styles["tags-wrp"]}>
          {tags.map((tag) => {
            return (
              <Box key={tag} component={"span"}>
                {tag}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default MenuThumbnail;
