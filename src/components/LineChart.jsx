import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";

function LineChart({ isDashboard = false, axisLeftSize, axisRightSizeSize }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
      data={data}
      theme={{
        // added
        text: {
          fontSize: axisLeftSize,
        },
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize: axisRightSizeSize,
          },
        },

        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      lineWidth={6}
      curve="natural"
      axisBottom={{
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
      }}
      axisLeft={{
        tickValues: [100, 200, 300, 400, 500, 600],
        tickRotation: -34,
        legend: isDashboard ? undefined : "Number",
        legendOffset: -55,
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 40,
          symbolShape: "circle",
        },
      ]}
    />
  );
}

export default LineChart;
