import React from "react";
import { Box, Grid } from "@mui/material";
import diaryData from "../../data/diary.json";
import { Diary } from "../../types/Diary";
import DiaryDetail from "../../components/DiaryDetail/DiaryDetail";
import styles from "./my_diary.module.scss";

const MyDiary = () => {
  const diaries = diaryData as Diary[];
  return (
    <Box>
      <Grid container columns={12} className={styles["diaries-grid-wrp"]}>
        {diaries.map((diary, index) => {
          return (
            <Grid
              item
              key={index}
              xl={2.9}
              lg={2.9}
              md={5.9}
              sm={5.9}
              xs={12}
              className={styles["diaries-grid-item"]}
            >
              <DiaryDetail diary={diary} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MyDiary;
