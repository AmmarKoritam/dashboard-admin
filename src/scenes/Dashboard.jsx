import { Box, Button, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../theme";
import Header from "../components/Header";
import Statas from "../components/Statas";
import RevenueCharts from "../components/RevenueCharts";
import Transactions from "../components/Transactions";
import Campaign from "../components/Campaign";
import SalesQuantity from "../components/SalesQuantity";
import GeoTraffic from "../components/GeoTraffic";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid  & Charts*/}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="10px"
      >
        {/* Row 1 */}
        <Statas />

        {/* Row 2 */}
        <RevenueCharts />
        <Transactions />

        {/* Row 3 */}
        <Campaign />
        <SalesQuantity />
        <GeoTraffic />
      </Box>
    </Box>
  );
}

export default Dashboard;
