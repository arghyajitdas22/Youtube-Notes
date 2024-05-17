import React, { useRef, useState } from "react";
import NoteModalContext from "./NoteModalContext";

const NoteModalContextProvider = ({ children }) => {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [timeStamp, setTimeStamp] = useState(0);

  const contextObj = {
    timeStamp,
    setTimeStamp,
    videoId,
    setVideoId,
    isNoteModalOpen,
    setIsNoteModalOpen,
  };
  return (
    <NoteModalContext.Provider value={contextObj}>
      {children}
    </NoteModalContext.Provider>
  );
};

export default NoteModalContextProvider;
