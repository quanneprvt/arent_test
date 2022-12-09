import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import RecordThumbnail from "../../components/RecordThumbnail/RecordThumbnail";
import styles from "./record_thumbnail.module.scss";

const RecordThumbnails = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container columns={!isXS ? 3.5 : 3} className={styles["record-wrp"]}>
      <Grid item xl={1} lg={1} md={1} sm={3} xs={3}>
        <RecordThumbnail
          title="Body Record"
          subtitle="自分のカラダの記録"
          background="/images/record/MyRecommend-1.svg"
        />
      </Grid>
      <Grid item xl={1} lg={1} md={1} sm={3} xs={3}>
        <RecordThumbnail
          title="My exercise"
          subtitle="自分の運動の記録"
          background="/images/record/MyRecommend-2.svg"
        />
      </Grid>
      <Grid item xl={1} lg={1} md={1} sm={3} xs={3}>
        <RecordThumbnail
          title="My Diary"
          subtitle="自分の日記"
          background="/images/record/MyRecommend-3.svg"
        />
      </Grid>
    </Grid>
  );
};

export default RecordThumbnails;
