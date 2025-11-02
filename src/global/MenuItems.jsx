import { useState } from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import Item from "./Item";

import { Box, Typography } from "@mui/material";

function MenuItems({ colors, isCollapsed }) {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
      <Item
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography variant="h6" color={colors.grey[300]} marginLeft={2}>
        Data
      </Typography>
      <Item
        title="Manage Team"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        title="Contacts Information"
        to="/contacts"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        title="Invoices Balances"
        to="/invoices"
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography variant="h6" color={colors.grey[300]} marginLeft={2}>
        Pages
      </Typography>
      <Item
        title="Profile Form"
        to="/form"
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        title="Calender"
        to="/calender"
        icon={<CalendarTodayOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        title="FAQ Page"
        to="/faq"
        icon={<HelpOutlineIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography variant="h6" color={colors.grey[300]} marginLeft={2}>
        Charts
      </Typography>
      <Item
        title="Bar Chart"
        to="/bar"
        icon={<BarChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        title="Pie Chart"
        to="/pie"
        icon={<PieChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        title="Line Chart"
        to="/line"
        icon={<TimelineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        title="Geography Chart"
        to="/geography"
        icon={<MapOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
}

export default MenuItems;
