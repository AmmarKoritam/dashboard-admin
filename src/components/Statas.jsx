import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box } from "@mui/material";
import StatBox from "./StatBox";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

function Statas() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StatBox
          title="12.524"
          subtitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StatBox
          title="712.754"
          subtitle="Sales Obtained"
          progress="0.5"
          increase="+21%"
          icon={
            <PointOfSaleIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StatBox
          title="426.213"
          subtitle="New Clients"
          progress="0.25"
          increase="+5%"
          icon={
            <PersonAddIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StatBox
          title="1,325,134"
          subtitle="Traffic Received"
          progress="0.75"
          increase="+43%"
          icon={
            <TrafficIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>
    </>
  );
}

export default Statas;
