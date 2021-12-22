import { v4 as uuidv4 } from "uuid";

export const tododata = [
  {
    id: uuidv4(),
    text: "Wake up",
    isCompleted: true
  },
  {
    id: uuidv4(),
    text: "Let dogs out",
    isCompleted: false
  },
  {
    id: uuidv4(),
    text: "Feed dogs",
    isCompleted: true
  },
  {
    id: uuidv4(),
    text: "Ship out my orders",
    isCompleted: false
  },
  {
    id: uuidv4(),
    text: "Apply for jobs",
    isCompleted: false
  },
  {
    id: uuidv4(),
    text: "Play on hack the box",
    isCompleted: false
  }
];
