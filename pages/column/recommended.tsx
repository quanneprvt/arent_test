import { Box, Grid } from "@mui/material";
import React from "react";
import RecommendThumbnail from "../../components/RecommendThumbnail/RecommendThumbnail";
import recommendedData from "../../data/recommended.json";
import { Recommended } from "../../types/Recommended";
import styles from "./recommended.module.scss";

const Recommended = () => {
  const recommendeds = recommendedData as Recommended[];
  return (
    <Box>
      <Grid container columns={12} className={styles["wrp"]}>
        {recommendeds.map((recommended, index) => {
          return (
            <Grid
              key={index}
              item
              xl={2.9}
              lg={2.9}
              md={5.9}
              sm={5.9}
              xs={12}
              className={styles["recommend-item"]}
            >
              <RecommendThumbnail
                title={recommended.name}
                subtitle={recommended.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Recommended;
