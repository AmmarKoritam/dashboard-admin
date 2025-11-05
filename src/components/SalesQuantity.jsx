import { Box, Typography, useTheme } from "@mui/material";

import BarChart from "../components/BarChart";
import { tokens } from "../theme";

function SalesQuantity() {
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
        Sales Quantity
      </Typography>
      <BarChart textSize={10} />
    </Box>
  );
}

export default SalesQuantity;
