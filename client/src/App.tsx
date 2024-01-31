import { ThemeProvider } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import { theme } from "./theme";
import Home from "./pages/home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ my: 8 }}>
          <Home />
        </Box>
        <Typography variant="body2" align="center">
          {`Copyright © Rita Aktay ${new Date().getFullYear()}`}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
