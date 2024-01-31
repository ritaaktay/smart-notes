import { Typography, Button } from "@mui/material";
import NotesList from "../../components/NotesList";

const Home = () => {
  return (
    <>
      <Typography variant="h4" align="center" pb={2}>
        Welcome to Smart Notes, your talking notebook!
      </Typography>
      <Button variant="outlined" color="primary" sx={{ mb: 2 }}>
        +
      </Button>
      <NotesList />
    </>
  );
};

export default Home;
