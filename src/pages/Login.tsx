import { useContext } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "linear-gradient(to top, #fbc2eb, #a18cd1)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflow: "hidden",
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Paper
          elevation={12}
          sx={{
            px: { xs: 3, sm: 5 },
            py: { xs: 4, sm: 5 },
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Typography
            variant="h4"
            mb={3}
            sx={{ fontWeight: "700", color: "#4b4b4b", fontSize: { xs: "1.8rem", sm: "2.2rem" } }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            sx={{ color: "#7f7f7f", fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Please log in to access your dashboard
          </Typography>
          <Button
            fullWidth
            variant="contained"
            size="large"
            aria-label="Login Form"
            onClick={handleLogin}
            sx={{
              backgroundColor: "#6a1b9a",
              color: "#fff",
              py: 1.5,
              borderRadius: "50px",
              fontWeight: 600,
              textTransform: "none",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#8e24aa",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Click to Login
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;
