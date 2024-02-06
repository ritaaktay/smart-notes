import { useState } from "react";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NoteProps } from "../types";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const NoteForm: React.FC<NoteProps> = ({ buttonBoxStyle, toggleEdit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let [loading, setLoading] = useState(false);

  const saveNote = async ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    setLoading(true);
    await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    }).then(() => toggleEdit(false));
  };

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
      <Box sx={buttonBoxStyle}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            saveNote({ title, content });
          }}
        >
          {loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress size={24} />
            </Box>
          ) : (
            <ArrowForwardIcon />
          )}
        </Button>
      </Box>
    </>
  );
};

export default NoteForm;
