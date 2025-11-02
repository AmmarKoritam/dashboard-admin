import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function Pie() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PIE CHART" subTitle="Simple Bie Chart" />
      </Box>
    </Box>
  );
}

export default Pie;
