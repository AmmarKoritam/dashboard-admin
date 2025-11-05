import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

function BarChart({ isDashboard = false, textSize, enableLabel = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        text: {
          fontSize: textSize,
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
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      enableLabel={enableLabel}
      labelSkipWidth={12}
      labelSkipHeight={12}
      borderRadius={5}
      borderWidth={2}
      borderColor={{ theme: "background" }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          itemsSpacing: 3,
          itemWidth: 100,
          itemHeight: 16,
        },
      ]}
      axisBottom={{
        legend: isDashboard ? undefined : "country (indexBy)",
        legendOffset: 32,
      }}
      axisLeft={{ legend: isDashboard ? undefined : "food", legendOffset: -40 }}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    />
  );
}

export default BarChart;
