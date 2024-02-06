import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Container, Box, CircularProgress } from "@mui/material";
import { theme } from "./theme";
import GithubLink from "./components/githubLink";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 8 }} display="flex" flexDirection="column">
          <Typography variant="h4" align="center" sx={{ mb: 6 }}>
            Welcome to Smart Notes, your talking notebook!
          </Typography>
          <Suspense fallback={<CircularProgress />}>
            <RouterProvider router={router} />
          </Suspense>
          <GithubLink />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
