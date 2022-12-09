import { Box, Grid } from "@mui/material";
import moment from "moment";
import React from "react";
import MenuThumbnail from "../../components/MenuThumbnail/Menuthumbnail";
import newsData from "../../data/news.json";
import { News } from "../../types/News";
import styles from "./news.module.scss";

const newsPath = "/images/news/";
const images = [
  "column-1",
  "column-2",
  "column-3",
  "column-4",
  "column-5",
  "column-6",
  "column-7",
  "column-8",
];

const News = () => {
  const news = newsData as News[];
  return (
    <Box>
      <Grid container columns={12} className={styles["wrp"]}>
        {news.map((newData, index) => {
          return (
            <Grid
              item
              key={index}
              xl={2.9}
              lg={2.9}
              md={5.9}
              sm={5.9}
              xs={12}
              className={styles["news-item"]}
            >
              <MenuThumbnail
                src={`${newsPath}${images[index % 8]}.svg`}
                title={`${moment(new Date(newData.date)).format(
                  "YYYY.MM.DD"
                )} ${newData.time}`}
                description={newData.description}
                tags={newData.tags}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default News;
