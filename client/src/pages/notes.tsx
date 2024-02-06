import { useState } from "react";
import NoteForm from "../components/noteForm";
import NoteList from "../components/noteList";

export function Component() {
  const [edit, setEdit] = useState(false);

  const toggleEdit = (value: boolean): void => {
    setEdit(value);
  };

  const buttonBoxStyle = {
    mt: 4,
    display: "flex",
    flexDirection: "row-reverse",
  };

  return (
    <>
      {edit ? (
        <NoteForm buttonBoxStyle={buttonBoxStyle} toggleEdit={toggleEdit} />
      ) : (
        <NoteList buttonBoxStyle={buttonBoxStyle} toggleEdit={toggleEdit} />
      )}
    </>
  );
}

Component.displayName = "Notes";
