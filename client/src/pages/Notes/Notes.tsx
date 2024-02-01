import { ReactNode, useState } from "react";
import { Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import NoteForm from "../../components/NoteForm";
import NotesList from "../../components/NotesList";

const Notes = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => setEdit(true);
  const handleEditDone = () => setEdit(false);

  const getButton = (onClick: () => void, icon: ReactNode) => {
    return (
      <Box sx={{ mt: 4, display: "flex", flexDirection: "row-reverse" }}>
        <Button variant="outlined" color="primary" onClick={onClick}>
          {icon}
        </Button>
      </Box>
    );
  };

  return (
    <>
      {edit ? (
        <NoteForm button={getButton(handleEditDone, <ArrowForwardIcon />)} />
      ) : (
        <NotesList button={getButton(handleEdit, <AddIcon />)} />
      )}
    </>
  );
};

export default Notes;
