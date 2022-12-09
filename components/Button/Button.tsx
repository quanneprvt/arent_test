import React from "react";
import { Button as MuiButton } from "@mui/material";
import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({ title, variant }) => {
  return (
    <MuiButton
      className={`${styles["button-action"]} ${
        variant && variant === "inactive"
          ? styles["inactive"]
          : styles["active"]
      }`}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
