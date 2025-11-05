import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../theme";
import GeographyChart from "./GeographyChart";

function GeoTraffic() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      overflow="hidden"
      p="15px"
    >
      <Typography variant="h5" fontWeight="600">
        Geography Based Traffic
      </Typography>
      <GeographyChart isDashboard />
    </Box>
  );
}

export default GeoTraffic;
