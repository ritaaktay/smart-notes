import { useState } from "react";
import { TextField } from "@mui/material";
import { NoteProps } from "../pages/Notes/Notes.types";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const NoteForm: React.FC<NoteProps> = ({ button }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <TextField
        value={title}
        label="Title"
        variant="outlined"
        sx={{ mb: 4 }}
        onChange={(event: InputChangeEvent) => {
          setTitle(event.target.value);
        }}
      />
      <TextField
        value={content}
        label="Note"
        multiline
        rows={19}
        onChange={(event: InputChangeEvent) => setContent(event.target.value)}
      />
      {button}
    </>
  );
};

export default NoteForm;
