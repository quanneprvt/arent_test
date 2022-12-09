import React, { Fragment } from "react";
import { Box, Grid } from "@mui/material";
import dishesData from "../../data/dishes.json";
import { Dishes } from "../../types/Dishes";
import Image from "next/legacy/image";
import styles from "./menu_display.module.scss";
import MenuData from "../../data/menu.json";
import MenuThumbnail from "../../components/MenuThumbnail/Menuthumbnail";
import Button from "../../components/Button/Button";

const thumbnailPath = "/images/menu/thumbnail/";
const images = ["1", "2", "3", "4", "5", "6", "7"];
const imagesPath = images.map((image) => `${thumbnailPath}${image}.svg`);

const MenuDisplay = () => {
  const data = dishesData as Dishes[];

  return (
    <>
      <Grid container columns={13} className={styles["menu-display-wrp"]}>
        {data.map((dishes: Dishes, index) => {
          return (
            <Fragment key={dishes.name}>
              {dishes.menu.map((m) => {
                return (
                  <Grid
                    item
                    key={m}
                    xl={3}
                    lg={3}
                    md={3}
                    sm={6}
                    xs={12}
                    className={styles["menu-display-item"]}
                  >
                    <MenuThumbnail
                      src={imagesPath[index % 7]}
                      title={MenuData[m].name}
                    />
                  </Grid>
                );
              })}
            </Fragment>
          );
        })}
      </Grid>
      <Box className={styles["btn-wrp"]}>
        <Button title="記録をもっと見る" />
      </Box>
    </>
  );
};

export default MenuDisplay;
