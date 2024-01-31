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
} from "@mui/material";

const NotesList = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((notes) => setNotes(notes));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {notes.length > 0 && (
          <TableHead>
            <TableRow>
              <TableCell>Notes</TableCell>
              <TableCell></TableCell>
              <TableCell width="10%"></TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {sortNotesByDate(notes).map((note: Note) => (
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
  );
};

export default NotesList;
