import { Suspense, lazy, useState } from "react";
import {
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./routes/PrivateRoute";
import Loader from "./components/Loader";

// Lazy-loaded pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Patients = lazy(() => import("./pages/Patients"));
const Emergency = lazy(() => import("./pages/Emergency"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  const APPBAR_HEIGHT = 64;

  if (isLoginPage) {
    return (
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <Box sx={{ display: "flex", backgroundColor: "#212121" }}>
      {/* Sidebar */}
      <Sidebar open={isSidebarOpen || !isMobile} onClose={closeSidebar} />

      {/* AppBar only on mobile */}
      {isMobile && (
        <AppBar position="fixed" sx={{ zIndex: 1300, background: "#2C3E50" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              MediSync
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          
          padding: isMobile ? 2 : 3,
          paddingTop: isMobile ? `${APPBAR_HEIGHT + 16}px` : "24px", // 👈 Fix gap on mobile
          marginLeft: isMobile ? 0 : "250px", // 👈 Prevent sidebar overlap on desktop
          width: "100%",
                   
        }}
      >
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/patients"
              element={
                <PrivateRoute>
                  <Patients />
                </PrivateRoute>
              }
            />
            <Route
              path="/emergency"
              element={
                <PrivateRoute>
                  <Emergency />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
};

export default App;
