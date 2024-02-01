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
      <Button variant="outlined" color="primary" onClick={onClick}>
        {icon}
      </Button>
    );
  };

  return (
    <>
      {edit ? <NoteForm /> : <NotesList />}
      <Box sx={{ mt: 4, display: "flex", flexDirection: "row-reverse" }}>
        {edit
          ? getButton(handleEditDone, <ArrowForwardIcon />)
          : getButton(handleEdit, <AddIcon />)}
      </Box>
    </>
  );
};

export default Notes;
