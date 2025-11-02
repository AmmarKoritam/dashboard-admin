import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function FAQ() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      </Box>
    </Box>
  );
}

export default FAQ;
