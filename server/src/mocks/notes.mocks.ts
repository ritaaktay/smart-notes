import { Note } from "../types/note.types.js";

export const MockNotes: Note[] = [
  {
    title: "Rejected for job offer",
    content: `Having just been rejected for this job offer,\
I don't know if an art career is right for me anymore. Job opportunities are so few.\
And the actual contents of the jobs do not satisfy me that much. Pay is ver little,\
the industry is toxic. I don't know if I want to do this for the rest of my life.`,
    date: new Date(2021, 10, 12),
  },
  {
    title: "I want to learn a digital skill",
    content: `I've been talking to my brother about learning some digital skills.\
This last project with the British Council really opened my mind. When researching\
digital transformations in the art world, I came across concepts like the Semantic Web,\
and they are sooo interesting. Really! I mean, technology is very creative. And relevant.\
I'd like to learn a digital skill but I don't know what. It could be UX, or Data Science,\
or Coding... Not sure which one to pick. I'll do some research and see what I like best.`,
    date: new Date(2022, 0, 5),
  },
  {
    title: "Learning to code",
    content: `Learning coding has been fun! It's been a few months since I haven't worked in\
the arts, and fully focusing on coding now. I started with Javascript. It's so creative,\
as I suspected. I can get working on a problem for days, and its so satisfying. I have a\
hunch that this might be a good industry for me.`,
    date: new Date(2022, 5, 30),
  },
  {
    title: "Go! Go! Go!",
    content: `I think I will do this, I will try to find a job as a software engineer.`,
    date: new Date(2022, 7, 30),
  },
  {
    title: "Working at my first job",
    content: `It's so exciting, working on a real world codebase! This offers so much more\
potential than my previous career... There is so much scope to keep learning, and the problems\
that we can solve are very interesting - which really motivates me! I am excited to start learning\
from all the talented engineers around me. I am also excited to start contributing to the codebase.`,
    date: new Date(2023, 1, 20),
  },
  {
    title: "Feeling a bit stuck",
    content: `I am a bit tired of working in a front-end team. I don't want React to be my only area\
of specialty. I want to explore Cloud Engineering, DevOps, APIs... But I don't know how...`,
    date: new Date(2023, 10, 1),
  },
];
