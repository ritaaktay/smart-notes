import { ThemeProvider } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import { theme } from "./theme";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ my: 8 }} display="flex" flexDirection="column">
          <Typography variant="h4" align="center" sx={{ mb: 6 }}>
            Welcome to Smart Notes, your talking notebook!
          </Typography>
          <Notes />
        </Box>
        <Typography variant="body2" align="center">
          {`Copyright © Rita Aktay ${new Date().getFullYear()}`}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
