import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Divider } from "@mui/material";
import styles from "./MenuButton.module.scss";
import { useRouter } from "next/router";

interface MenuButtonProps {
  button: React.ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ button }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [rendered, setRendered] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setRendered(true);
  }, []);

  const navigate = useCallback(
    async (path: string) => {
      await router.push(
        {
          pathname: path,
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  if (!rendered) return null;

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        className={styles["btn-wrp"]}
      >
        {button}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            background: styles.menuBackground,
            color: "white",
            minWidth: styles.menuWidth,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          onClickCapture={() => navigate("/homepage")}
        >
          自分の記録
        </MenuItem>
        <Divider className={styles["divider"]} />
        <MenuItem
          onClick={handleClose}
          onClickCapture={() => navigate("/record")}
        >
          体重グラフ
        </MenuItem>
        <Divider className={styles["divider"]} />
        <MenuItem
          onClick={handleClose}
          onClickCapture={() => navigate("/column")}
        >
          目標
        </MenuItem>
        <Divider className={styles["divider"]} />
        <MenuItem
          onClick={handleClose}
          onClickCapture={() => navigate("/homepage")}
        >
          選択中のコース
        </MenuItem>
        <Divider className={styles["divider"]} />
        <MenuItem
          onClick={handleClose}
          onClickCapture={() => navigate("/record")}
        >
          コラム一覧
        </MenuItem>
        <Divider className={styles["divider"]} />
        <MenuItem
          onClick={handleClose}
          onClickCapture={() => navigate("/column")}
        >
          設定
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default MenuButton;
