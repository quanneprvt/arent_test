import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./my_exercies.module.scss";
import moment from "moment";
import exerciesData from "../../data/exercies.json";
import ExerciesDetail from "../../components/ExerciesDetail/ExerciesDetail";

const MyExercies = () => {
  const selectedDate = 1620147600000;

  return (
    <Box className={styles["exercies-wrp"]}>
      <Box className={styles["title-wrp"]}>
        <Typography>My Exercies</Typography>
        <Typography>
          {moment(new Date(selectedDate)).format("YYYY.MM.DD")}
        </Typography>
      </Box>
      <Box className={styles["detail-wrp"]}>
        <Grid container columns={2}>
          {exerciesData.map((exercise, index) => {
            return (
              <Grid item key={index} lg={1} xl={1} md={1} sm={1} xs={2}>
                <ExerciesDetail exercise={exercise} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyExercies;
