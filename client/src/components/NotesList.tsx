import { useState, useEffect } from "react";
import { sortNotesByDate } from "../helpers/sortNotesByDate";
import { Note } from "../../../server/src/types/note.types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NoteProps } from "../pages/Notes/Notes.types";

const NotesList: React.FC<NoteProps> = ({ buttonBoxStyle, toggleEdit }) => {
  let [notes, setNotes] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  // TODO can this be a custom data fetching hook with loading, data and error states?
  useEffect(() => {
    fetch("/api/notes").then(async (res) => {
      if (!res.ok) {
        setError(true);
        console.log(await res.text());
      } else {
        const data = await res.json();
        setNotes(data);
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Notes</TableCell>
              <TableCell></TableCell>
              <TableCell width="10%"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell component="th" scope="row">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )}
            {error && (
              <TableRow>
                <TableCell component="th" scope="row">
                  Oops! Can't get your notes right now, please try again in a
                  moment.
                </TableCell>
              </TableRow>
            )}
            {notes.length > 0 &&
              sortNotesByDate(notes).map((note: Note) => (
                <TableRow
                  key={note.title}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {note.title}
                  </TableCell>
                  <TableCell>{note.content}</TableCell>
                  <TableCell align="right" width="10%">
                    {note.date.split("T")[0]}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={buttonBoxStyle}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            toggleEdit(true);
          }}
        >
          <AddIcon />
        </Button>
      </Box>
    </>
  );
};

export default NotesList;
