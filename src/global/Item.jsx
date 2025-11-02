import { tokens } from "../theme";
import { MenuItem } from "react-pro-sidebar";
import { useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Item({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      component={<Link to={to} />}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
}

export default Item;
