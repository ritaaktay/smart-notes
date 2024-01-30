export const prompter = {
  summary: ({ notes, dated }: { notes: string; dated: boolean }) => {
    const prompt = `I am sharing some of my personal notes, could you summarise what I have been thinking?\
        Please use the second person pronoun to refer to the author of the notes.\
        ${dated ? `Consider the dates when fitting it all into a story.` : null}
        Here are the notes in JSON format: \n ${notes}`;

    return prompt;
  },
};
