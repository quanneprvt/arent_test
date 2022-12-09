import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./DefaultLayout.module.scss";

interface DefaultLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Box className={styles["layout-wrp"]}>
      <Header />
      <Box className={styles["layout-body"]}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
