import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Warning, CheckCircle, WatchLater } from "@mui/icons-material"; // Icons for status

const emergencies = [
  { id: 1, name: "Alex Brown", status: "Critical", room: 205 },
  { id: 2, name: "Sophia Lee", status: "Stable", room: 110 },
  { id: 3, name: "Ryan Clark", status: "Under Observation", room: 308 },
  { id: 4, name: "John Doe", status: "Critical", room: 402 },
  { id: 5, name: "Emily White", status: "Stable", room: 305 },
  { id: 6, name: "Michael Green", status: "Under Observation", room: 210 },
  { id: 7, name: "Linda Williams", status: "Critical", room: 101 },
  { id: 8, name: "David Smith", status: "Stable", room: 450 },
  { id: 9, name: "James Johnson", status: "Under Observation", room: 125 },
];

const Emergency = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Critical":
        return <Warning sx={{ color: "#d32f2f", fontSize: "2rem" }} />;
      case "Stable":
        return <CheckCircle sx={{ color: "#388e3c", fontSize: "2rem" }} />;
      case "Under Observation":
        return <WatchLater sx={{ color: "#1976d2", fontSize: "2rem" }} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          fontWeight: 700,
          background: "linear-gradient(45deg, #3498db, #2ecc71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textFillColor: "transparent",
        }}
      >
        Emergency Cases
      </Typography>

      <Grid container spacing={2}>
        {emergencies.map((caseItem) => (
          <Grid item xs={12} sm={6} md={4} key={caseItem.id}>
            <Card
              sx={{
                minWidth: 0,
                bgcolor:
                  caseItem.status === "Critical"
                    ? "#f8d7da"
                    : caseItem.status === "Stable"
                    ? "#e8f5e9"
                    : "#e3f2fd",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                padding: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {getStatusIcon(caseItem.status)}
                  <Typography
                    variant="h6"
                    sx={{ color: "#333", fontWeight: 600, marginLeft: 1 }}
                  >
                    {caseItem.name}
                  </Typography>
                </Box>
                <Typography sx={{ color: "#1976d2", fontWeight: 500 }}>
                  Status: {caseItem.status}
                </Typography>
                <Typography sx={{ color: "#388e3c", fontWeight: 500 }}>
                  Room No: {caseItem.room}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Emergency;
