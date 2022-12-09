import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import styles from "./Header.module.scss";
import Image from "next/image";
import MenuItem from "./MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "../../hooks/useWindowSize";
import MenuButton from "../MenuButton/MenuButton";
import { useRouter } from "next/router";

const menuItems = [
  {
    name: "自分の記録",
    icon: "/images/icon_memo.svg",
    path: "/homepage",
  },
  {
    name: "チャレンジ",
    icon: "/images/icon_challenge.svg",
    path: "/record",
  },
  {
    name: "お知らせ",
    icon: "/images/icon_mark.svg",
    path: "/column",
  },
];

const Header = () => {
  const { isMobile } = useWindowSize();
  const router = useRouter();
  return (
    <Box className={styles["header-wrp"]}>
      <AppBar className={styles["header-bar"]}>
        <Toolbar>
          <IconButton className={styles["logo-item"]}>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={100}
              height={50}
            />
          </IconButton>
          <Box className={styles["menu-item-wrp"]}>
            {!isMobile && (
              <Box className={styles["menu-navi-wrp"]}>
                {menuItems.map((item) => {
                  return (
                    <Box
                      key={item.name}
                      component="span"
                      onClick={async () =>
                        await router.push(
                          {
                            pathname: item.path,
                          },
                          undefined,
                          { shallow: true }
                        )
                      }
                    >
                      <MenuItem title={item.name} iconSrc={item.icon} />
                    </Box>
                  );
                })}
              </Box>
            )}
            <MenuButton
              button={
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  className={styles["menu-icon"]}
                >
                  <MenuIcon />
                </IconButton>
              }
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
