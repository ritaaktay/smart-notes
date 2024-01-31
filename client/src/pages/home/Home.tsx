import { Typography } from "@mui/material";
import NotesList from "../../components/NotesList";

const Home = () => {
  return (
    <>
      <Typography variant="h4" align="center" pb={2}>
        Welcome to Smart Notes, your talking notebook!
      </Typography>
      <NotesList />
    </>
  );
};

export default Home;
