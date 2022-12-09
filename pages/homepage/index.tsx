import { Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import Banner from "./banner";
import Menu from "./menu";
import MenuDisplay from "./menu_display";

const Homepage = () => {
  return (
    <>
      <DefaultLayout>
        <Banner />
        <Menu />
        <MenuDisplay />
      </DefaultLayout>
    </>
  );
};

export default Homepage;
