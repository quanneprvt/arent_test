import { Box } from "@mui/material";
import moment from "moment";
import React from "react";
import { Diary } from "../../types/Diary";
import styles from "./DiaryDetail.module.scss";

interface DiaryDetailProps {
  diary: Diary;
}

const DiaryDetail: React.FC<DiaryDetailProps> = ({ diary }) => {
  return (
    <Box className={styles["wrp"]}>
      <Box className={styles["date-wrp"]}>
        <Box>{moment(new Date(diary.date)).format("YYYY.MM.DD")}</Box>
        <Box>{diary.time}</Box>
      </Box>
      <Box className={styles["title"]}>{diary.title}</Box>
      <Box className={styles["desc"]}>{diary.description}</Box>
    </Box>
  );
};

export default DiaryDetail;
