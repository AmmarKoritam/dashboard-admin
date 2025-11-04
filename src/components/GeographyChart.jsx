import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

function GeographyChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize: 13,
          },
        },
      }}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      borderColor={colors.grey[100]}
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      tooltip={({ feature }) => (
        <div
          style={{
            background:
              theme.palette.mode === "dark"
                ? colors.primary[500]
                : colors.primary[100],
            color: theme.palette.mode === "dark" ? "#fff" : "#111",
            padding: "6px 12px",
            borderRadius: "6px",
            border: `1px solid ${colors.grey[300]}`,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 2px 6px rgba(0,0,0,0.5)"
                : "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          <strong>{feature.properties.name}</strong>
          <br />
          Value: {feature.value ? feature.value.toLocaleString() : "No data"}
        </div>
      )}
      legends={
        isDashboard
          ? undefined
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
              },
            ]
      }
    />
  );
}

export default GeographyChart;
