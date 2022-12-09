import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import Recommended from "./recommended";
import { Box } from "@mui/material";
import styles from "./index.module.scss";
import News from "./news";
import Button from "../../components/Button/Button";

const Column = () => {
  return (
    <>
      <DefaultLayout>
        <Box className={styles["wrp"]}>
          <Recommended />
          <News />
          <Box className={styles["btn-wrp"]}>
            <Button title="記録をもっと見る" />
          </Box>
        </Box>
      </DefaultLayout>
    </>
  );
};

export default Column;
