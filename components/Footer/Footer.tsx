import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <Box className={styles["footer-wrp"]}>
      <Grid columns={12} container className={styles["footer-items"]}>
        <Grid xl={2} lg={2} md={2} sm={6} xs={12} item>
          <Typography>会員登録</Typography>
        </Grid>
        <Grid xl={2} lg={2} md={2} sm={6} xs={12} item>
          <Typography>運営会社</Typography>
        </Grid>
        <Grid xl={2} lg={2} md={2} sm={6} xs={12} item>
          <Typography>利用規約</Typography>
        </Grid>
        <Grid xl={2} lg={2} md={2} sm={6} xs={12} item>
          <Typography>個人情報の取扱について</Typography>
        </Grid>
        <Grid xl={2} lg={2} md={2} sm={6} xs={12} item>
          <Typography>特定商取引法に基づく表記</Typography>
        </Grid>
        <Grid xl={2} lg={2} md={2} sm={6} xs={12} item>
          <Typography>お問い合わせ</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
