import { useState, useContext, Children} from "react";
import {PromptContext} from "./PromptContext";

export default function ContextProvider({children}) {
  const [promptValues, setPromptValues] = useState({
    pitchType: "",
    orgType: "",
    role: "",
    skills: "",
    tone: "",
    additionalInfo: "",
});

  return (
    <PromptContext.Provider value={{ promptValues, setPromptValues }}>
        {children}
    </PromptContext.Provider>
  )
}