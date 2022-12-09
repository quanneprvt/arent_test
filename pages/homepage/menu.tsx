import React from "react";
import { Grid } from "@mui/material";
import menuData from "../../data/menu.json";
import { MenuType, Menu as MenuEnum } from "../../types/Menu";
import styles from "./menu.module.scss";
import MenuSelect from "../../components/MenuSelect/MenuSelect";

interface MenuDataType {
  [key: string]: MenuType;
}

const Menu = () => {
  const data = menuData as MenuDataType;
  return (
    <Grid container columns={5} className={styles["menu-item-wrp"]}>
      {Object.keys(data).map((menu) => {
        return (
          <Grid
            key={menu}
            item
            xl={1}
            lg={1}
            md={1}
            sm={2}
            xs={4}
            className={styles["menu-item"]}
          >
            <MenuSelect
              iconPath={
                menu === MenuEnum.SNACK
                  ? "/images/menu/icon_cup.svg"
                  : "/images/menu/icon_knife.svg"
              }
              text={data[menu].name}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Menu;
