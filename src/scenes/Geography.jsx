import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function Geography() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="GEOGRAPHY" subTitle="Simple Geography Chart" />
      </Box>
    </Box>
  );
}

export default Geography;
