import { Box, Grid, Typography } from "@mui/material";
import {
  People,
  LocalHospital,
  MedicalServices,
  Hotel,
  CalendarToday,
  History,
  Star,
  EventAvailable,
  Call,
} from "@mui/icons-material";

const cardData = [
  { label: "Total Patients", value: 128, bg: "#e3f2fd", color: "#1976d2", icon: <People /> },
  { label: "Emergency Cases", value: 6, bg: "#fdecea", color: "#d32f2f", icon: <LocalHospital /> },
  { label: "Doctors On Call", value: 14, bg: "#e8f5e9", color: "#388e3c", icon: <Call /> },
  { label: "Admissions Today", value: 10, bg: "#ffebee", color: "#f44336", icon: <EventAvailable /> },
  { label: "Available Beds", value: 20, bg: "#e8f5e9", color: "#4caf50", icon: <Hotel /> },
  { label: "Upcoming Appointments", value: 12, bg: "#e3f2fd", color: "#1e88e5", icon: <CalendarToday /> },
  { label: "Recent Discharges", value: 8, bg: "#f1f8e9", color: "#7cb342", icon: <MedicalServices /> },
  { label: "High Ratings", value: 5, bg: "#fff9c4", color: "#fbc02d", icon: <Star /> },
  { label: "Patient History", value: 320, bg: "#e1f5fe", color: "#0288d1", icon: <History /> },
];

const Dashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 4,
        py: 3,
    
        color: "#fff",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#00e5ff", mb: 1 }}>
        Welcome to MediSync Dashboard
      </Typography>
      <Typography sx={{ mb: 4, color: "#ccc" }}>
        Last Updated: {new Date().toLocaleString()}
      </Typography>

      <Grid container spacing={3}>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundColor: item.bg,
                color: item.color,
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 120,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {item.icon} {item.label}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
