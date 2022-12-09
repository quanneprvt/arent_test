import type { AppProps } from "next/app";
import "../styles/variables.scss";
import "../styles/global.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
  ChartOptions,
} from "chart.js";
import Loading from "../components/Loading/Loading";

const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart: Chart, args: any, options: ChartOptions) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = (options.color as string) || "#99ffff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugin
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
};

export default App;
