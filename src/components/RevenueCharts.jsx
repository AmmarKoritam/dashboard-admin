import { Box, IconButton, Typography, useTheme } from "@mui/material";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { tokens } from "../theme";
import LineChart from "./LineChart";

function RevenueCharts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn="span 8"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Revenue Generated
          </Typography>
          <Typography
            variant="h3"
            fontWeight="700"
            color={colors.greenAccent[500]}
          >
            $59,342.32
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
            />
          </IconButton>
        </Box>
      </Box>

      <Box height="250px" mt="-20px">
        <LineChart isDashboard axisLeftSize={10} axisRightSizeSize={18} />
      </Box>
    </Box>
  );
}

export default RevenueCharts;
