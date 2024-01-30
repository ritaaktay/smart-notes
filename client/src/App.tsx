import Home from "./pages/home/Home";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <Home />
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {`Copyright © Rita Aktay ${new Date().getFullYear()}`}
      </Typography>
    </Container>
  );
}

export default App;
