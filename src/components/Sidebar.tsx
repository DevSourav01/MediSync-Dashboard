import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EmergencyIcon from "@mui/icons-material/LocalHospital";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { FC } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#2C3E50",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "2px 0px 15px rgba(0, 0, 0, 0.1)",
        borderRight: "1px solid #34495E",
      }}
    >
      <List sx={{ pt: 3 }}>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={onClose}
          sx={{
            backgroundColor: isActive("/") ? "#3498db" : "transparent",
            color: isActive("/") ? "#fff" : "#bdc3c7",
            "&:hover": {
              backgroundColor: "#2980b9",
              transform: "scale(1.05)",
              borderRadius: "8px",
            },
            px: 2,
            transition: "all 0.3s ease",
          }}
        >
          <DashboardIcon
            sx={{ color: isActive("/") ? "#fff" : "#bdc3c7", mr: 2 }}
          />
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/patients"
          onClick={onClose}
          sx={{
            backgroundColor: isActive("/patients") ? "#3498db" : "transparent",
            color: isActive("/patients") ? "#fff" : "#bdc3c7",
            "&:hover": {
              backgroundColor: "#2980b9",
              transform: "scale(1.05)",
              borderRadius: "8px",
            },
            px: 2,
            transition: "all 0.3s ease",
          }}
        >
          <PeopleIcon
            sx={{ color: isActive("/patients") ? "#fff" : "#bdc3c7", mr: 2 }}
          />
          <ListItemText primary="Patients" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/emergency"
          onClick={onClose}
          sx={{
            backgroundColor: isActive("/emergency")
              ? "#3498db"
              : "transparent",
            color: isActive("/emergency") ? "#fff" : "#bdc3c7",
            "&:hover": {
              backgroundColor: "#2980b9",
              transform: "scale(1.05)",
              borderRadius: "8px",
            },
            px: 2,
            transition: "all 0.3s ease",
          }}
        >
          <EmergencyIcon
            sx={{
              color: isActive("/emergency") ? "#fff" : "#bdc3c7",
              mr: 2,
            }}
          />
          <ListItemText primary="Emergency" />
        </ListItem>
      </List>

      <Box sx={{ pb: 3 }}>
        <Divider sx={{ backgroundColor: "#34495E" }} />
        <List>
          <ListItem
            button
            onClick={handleLogout}
            sx={{
              "&:hover": {
                background: "linear-gradient(45deg, #ff6b81, #ff3366)",
                color: "#fff",
                boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)",
                transform: "scale(1.05)",
                borderRadius: "8px",
              },
              px: 2,
              transition: "all 0.3s ease",
              color: "#d1d5db",
            }}
          >
            <LogoutIcon sx={{ mr: 2, color: "#e74c3c" }} />
            <ListItemText primary="Logout" sx={{ color: "#e74c3c" }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return isMobile ? (
    <Drawer
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: 210,
          top: 50,
          height: "calc(100% - 50px)",
        },
      }}
    >
      {SidebarContent}
    </Drawer>
  ) : (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
      }}
    >
      {SidebarContent}
    </Box>
  );
};

export default Sidebar;
