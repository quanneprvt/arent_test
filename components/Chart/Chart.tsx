import { LineControllerChartOptions } from "chart.js";
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { ChartData as ChartDataType } from "../../types/Chart";
import styles from "./Chart.module.scss";

interface ChartProps {
  data: ChartDataType[];
  lineDrawFields: (keyof ChartDataType)[];
  labels: string[];
}

const Chart: React.FC<ChartProps> = ({ data, lineDrawFields, labels }) => {
  const colors = useMemo(() => {
    return [styles.chartPrimary, styles.chartSecondary];
  }, []);

  const ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      customCanvasBackgroundColor: {
        color: styles.chartBackgroundColor,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: styles.lineColor,
        },
      },
    },
  };

  const formatData = useMemo(() => {
    return {
      labels,
      datasets: lineDrawFields.map((field, index) => {
        return {
          data: data.map((pack) => pack[field]),
          borderColor: colors[index % 2],
        };
      }),
    };
  }, [colors, data, lineDrawFields, labels]);

  return <Line options={ChartOptions} data={formatData} redraw />;
};

export default Chart;
