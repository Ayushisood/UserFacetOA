import { createContext } from "react";

const wordContext = createContext({
    currentWord: '',
    setcurrentWord: (word) => {}
  });
  
export default wordContext;