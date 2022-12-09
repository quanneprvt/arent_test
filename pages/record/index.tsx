import { Box, Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import BodyRecord from "./body_record";
import RecordThumbnails from "./record_thumbnail";
import styles from "./index.module.scss";
import MyExercies from "./my_exercies";
import MyDiary from "./my_diary";

const Record = () => {
  return (
    <>
      <DefaultLayout>
        <Box className={styles["wrp"]}>
          <RecordThumbnails />
          <BodyRecord />
          <MyExercies />
          <MyDiary />
        </Box>
      </DefaultLayout>
    </>
  );
};

export default Record;
