import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { type To } from "react-router-dom";

interface ItemProps {
  title: string;
  to: To;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}
const Item = ({ title, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{color: colors.grey[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}
      </Typography>
    </MenuItem>
  );
}

const MySideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSelected, setIsSelected] = useState("Dashboard");

  const setSelected = (title: string) => {
    // eslint-disable-next-line no-debugger
    debugger;
    setIsSelected(title);
  }

  return (
    <Sidebar
      collapsed={isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.primary[400],
        },
      }}
    >
      <Menu>
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuIcon /> : undefined}
          style={{ color: colors.grey[100] }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="10px"
            >
              <Typography variant="h4" color={colors.grey[100]}>
                ADMIN
              </Typography>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {/*USER */}
        {!isCollapsed && (
          <Box>
            <Box textAlign="center">
              <img
                src="src\assets\user.jpg"
                alt="profile-user"
                style={{ borderRadius: "50px" }}
                width="100px"
                height="100px"
              />
            </Box>

            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mb: "10px 0 0 0" }}
              >
                Shrinith
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Admin of this app
              </Typography>
            </Box>
          </Box>
        )}

        {/*menu items */}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title= "Dashboard"
            to="/"
            icon={<HomeIcon />}
            selected={isSelected}
            setSelected={setSelected} />

          <Typography variant="h6" 
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}>
          Data</Typography>

            <Item
            title= "Manage Team"
            to="/team"
            icon={<PeopleIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Item
            title= "Contacts"
            to="/contacts"
            icon={<ContactsIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Item
            title= "Invoices Balances"
            to="/invoices"
            icon={<ReceiptIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Typography variant="h6" 
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}>
          Pages</Typography>

            <Item
            title= "Profile Form"
            to="/form"
            icon={<PersonIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Item
            title= "Calendar"
            to="/calendar"
            icon={<CalendarMonthIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Item
            title= "FAQ Page"
            to="/faq"
            icon={<ContactSupportIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Typography variant="h6" 
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}>
          Charts</Typography>

            <Item
            title= "Bar Chart"
            to="/bar" 
            icon={<BarChartIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Item
            title= "Pie Chart"
            to="/pie"
            icon={<PieChartIcon />}
            selected={isSelected}
            setSelected={setSelected} />

            <Item
            title= "Line Chart"
            to="/line"
            icon={<TimelineIcon />}
            selected={isSelected}
            setSelected={setSelected} />
            
            <Item
            title= "Geography"
            to="/geography"
            icon={<MapIcon />}
            selected={isSelected}
            setSelected={setSelected} />

        </Box>
      </Menu>
    </Sidebar>
  );
};

export default MySideBar;
