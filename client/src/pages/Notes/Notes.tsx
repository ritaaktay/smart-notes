import { useState } from "react";
import NoteForm from "../../components/NoteForm";
import NotesList from "../../components/NotesList";

const Notes = () => {
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
        <NotesList buttonBoxStyle={buttonBoxStyle} toggleEdit={toggleEdit} />
      )}
    </>
  );
};

export default Notes;
