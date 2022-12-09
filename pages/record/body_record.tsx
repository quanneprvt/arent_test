import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { useMemo } from "react";
import Button from "../../components/Button/Button";
import Chart from "../../components/Chart/Chart";
import chartData from "../../data/chartRecord.json";
import { ChartData } from "../../types/Chart";
import styles from "./body_record.module.scss";

const BodyRecord = () => {
  const selectedDate = 1620147600000;

  return (
    <Box className={styles["body-record-wrp"]}>
      <Box className={styles["title-wrp"]}>
        <Typography>Body Record</Typography>
        <Typography>
          {moment(new Date(selectedDate)).format("YYYY.MM.DD")}
        </Typography>
      </Box>
      <Box className={styles["record-chart-wrp"]}>
        <Chart
          data={chartData as ChartData[]}
          labels={chartData.map((data) => data.month + "月")}
          lineDrawFields={["a", "b"]}
        />
      </Box>
      <Box className={styles["actino-wrp"]}>
        <Button title="日" variant="inactive" />
        <Button title="週" variant="inactive" />
        <Button title="月" variant="inactive" />
        <Button title="年" />
      </Box>
    </Box>
  );
};

export default BodyRecord;
