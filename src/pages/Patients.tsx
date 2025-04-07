import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const patients = [
  { id: 1, name: "John Doe", age: 32, condition: "Flu" },
  { id: 2, name: "Jane Smith", age: 27, condition: "Diabetes" },
  { id: 3, name: "Michael Johnson", age: 45, condition: "Hypertension" },
  { id: 4, name: "Emily White", age: 29, condition: "Asthma" },
  { id: 5, name: "David Brown", age: 55, condition: "Heart Disease" },
];

const Patients = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 3, sm: 5 } }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: "linear-gradient(45deg, #3498db, #2ecc71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
        }}
      >
        Patients List
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "0.9rem", sm: "1rem" },
          color: "#777",
          fontWeight: 400,
          mb: 2,
        }}
      >
        A list of patients with their details.
      </Typography>

      {isMobile ? (
        <Box>
          {patients.map((patient) => (
            <Paper
              key={patient.id}
              sx={{
                mb: 2,
                p: 2,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PersonIcon sx={{ color: "#1976d2", mr: 1 }} />
                <Typography sx={{ fontWeight: 600 }}>ID: {patient.id}</Typography>
              </Box>
              <Typography>Name: {patient.name}</Typography>
              <Typography>Age: {patient.age}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <HealthAndSafetyIcon sx={{ color: "#e91e63", mr: 1 }} />
                <Typography>Condition: {patient.condition}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      ) : (
        <Box sx={{ overflowX: "auto" }}>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              minWidth: 600,
            }}
          >
            <Table>
              <TableHead sx={{ bgcolor: "#1976d2" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>ID</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Age</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Condition</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow
                    key={patient.id}
                    sx={{
                      "&:hover": { backgroundColor: "#e3f2fd" },
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <TableCell>
                      <Tooltip title="Patient ID" arrow>
                        <IconButton>
                          <PersonIcon sx={{ color: "#1976d2", fontSize: "1.5rem" }} />
                        </IconButton>
                      </Tooltip>
                      {patient.id}
                    </TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>
                      <Tooltip title={`Condition: ${patient.condition}`} arrow>
                        <IconButton>
                          <HealthAndSafetyIcon sx={{ color: "#e91e63", fontSize: "1.5rem" }} />
                        </IconButton>
                      </Tooltip>
                      {patient.condition}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default Patients;
