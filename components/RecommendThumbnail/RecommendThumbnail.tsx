import { Box, Divider } from "@mui/material";
import React from "react";
import styles from "./RecommendThumbnail.module.scss";

interface RecommendThumbnailProps {
  title: string;
  subtitle: string;
}

const RecommendThumbnail: React.FC<RecommendThumbnailProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box className={styles["wrp"]}>
      <Box className={styles["title"]}>{title}</Box>
      <Divider className={styles["divider"]} />
      <Box className={styles["desc"]}>{subtitle}</Box>
    </Box>
  );
};

export default RecommendThumbnail;
