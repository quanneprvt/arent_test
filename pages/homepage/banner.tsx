import chartData from "../../data/chartHomepage.json";
import Chart from "../../components/Chart/Chart";
import { ChartData } from "../../types/Chart";
import styles from "./homepage.module.scss";
import Image from "next/legacy/image";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

const Banner = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container columns={10}>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={10}>
        <Image
          src={"/images/bannerHomepage.svg"}
          layout={"responsive"}
          alt="homepage-banner"
          width={100}
          height={58}
        />
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={10}
        className={styles["grid-chart-wrp"]}
      >
        <Box className={`${!isXS && styles["chart-wrp"]}`}>
          <Chart
            data={chartData as ChartData[]}
            labels={chartData.map((data) => data.month + "月")}
            lineDrawFields={["a", "b"]}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
