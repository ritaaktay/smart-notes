import { useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import NoteForm from "../../components/NoteForm";
import NotesList from "../../components/NotesList";

const Notes = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => setEdit(true);
  const handleEditDone = () => setEdit(false);

  return (
    <>
      {edit ? (
        <Button
          variant="outlined"
          color="primary"
          sx={{ mb: 2 }}
          onClick={handleEditDone}
        >
          <ArrowForwardIcon />
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          sx={{ mb: 2 }}
          onClick={handleEdit}
        >
          <AddIcon />
        </Button>
      )}
      {edit ? <NoteForm /> : <NotesList />}
    </>
  );
};

export default Notes;
