import { Box, Divider } from "@mui/material";
import React from "react";
import { Exercise } from "../../types/Exercise";
import styles from "./ExerciesDetail.module.scss";

interface ExerciesDetailProps {
  exercise: Exercise;
}

const ExerciesDetail: React.FC<ExerciesDetailProps> = ({ exercise }) => {
  return (
    <Box className={styles["wrp"]}>
      <Box className={styles["detail-wrp"]}>
        <Box className={styles["mark"]}>
          <sup>.</sup>
        </Box>
        <Box className={styles["title-wrp"]}>
          <Box className={styles["title"]}>{exercise.name}</Box>
          <Box className={styles["cal"]}>
            {Math.round(exercise.cal / 1000)}kcal
          </Box>
        </Box>
        <Box className={styles["time"]}>
          {Math.round(exercise.time / 1000 / 60)}min
        </Box>
      </Box>
      <Divider className={styles["divider"]} />
    </Box>
  );
};

export default ExerciesDetail;
