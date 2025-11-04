import { Box, useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";
import Header from "../components/Header";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";

function Pie() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="PIE CHART" subTitle="Simple Bie Chart" />
      <Box height="75vh">
        <ResponsivePie /* or Pie for fixed dimensions */
          data={data}
          theme={{
            // added
            text: {
              fontSize: 24,
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
                fontSize: 24,
              },
            },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={colors.primary[100]}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 122,
              itemHeight: 18,
              symbolShape: "circle",
            },
          ]}
        />
      </Box>
    </Box>
  );
}

export default Pie;
