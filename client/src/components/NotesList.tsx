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
} from "@mui/material";
import { NoteProps } from "../pages/Notes/Notes.types";

const NotesList: React.FC<NoteProps> = ({ button }) => {
  let [notes, setNotes] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((notes) => {
        setNotes(notes);
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
            {loading ? (
              <TableRow>
                <TableCell component="th" scope="row">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
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
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {button}
    </>
  );
};

export default NotesList;
