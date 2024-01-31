export const sortNotesByDate = (notes: any[]) => {
  return notes.sort((a: any, b: any) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};
