import React from "react";
import { Box } from "@mui/material";
import Image from "next/legacy/image";
import styles from "./RecordThumbnail.module.scss";

interface RecordThumbnailProps {
  title: string;
  subtitle: string;
  background: string;
}

const RecordThumbnail: React.FC<RecordThumbnailProps> = ({
  title,
  subtitle,
  background,
}) => {
  return (
    <Box className={styles["thumbnail-wrp"]}>
      <Image
        src={"/images/record/background.svg"}
        alt="record-background"
        width={100}
        height={100}
        layout={"responsive"}
        loading="lazy"
      />
      <Box className={styles["img-wrp"]}>
        <Image
          alt="record-thumb"
          src={background}
          width={50}
          height={50}
          layout="responsive"
          loading="lazy"
        />
      </Box>
      <Box className={styles["txt-wrp"]}>
        <Box className={styles["title"]}>{title}</Box>
        <Box className={styles["subtitle"]}>{subtitle}</Box>
      </Box>
    </Box>
  );
};

export default RecordThumbnail;
