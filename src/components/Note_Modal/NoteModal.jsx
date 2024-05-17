import React, { useContext, useState } from "react";
import MoadalLayout from "../../layouts/Moadal.layout";
import NoteModalContext from "../../context/NoteModalContext";
import { X } from "@phosphor-icons/react";

const NoteModal = () => {
  const { timeStamp, videoId, isNoteModalOpen, setIsNoteModalOpen } =
    useContext(NoteModalContext);
  const [note, setNote] = useState("");

  const handleAddNote = () => {
    console.log(note);
    console.log(timeStamp);
    console.log(videoId);
  };

  if (!isNoteModalOpen) return null;
  return (
    <MoadalLayout>
      <div className="bg-white rounded-md flex flex-col gap-4 p-4 w-[500px]">
        <div className="flex items-center justify-between">
          <span className="w-2 h-2"></span>
          <h2 className="font-semibold text-[#101828] text-lg text-center">
            Add a Note
          </h2>
          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setIsNoteModalOpen(false)}
          />
        </div>
        <textarea
          className="border border-[#D0D5DD] rounded-md p-2 h-24"
          placeholder="Enter your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button
          type="button"
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>
    </MoadalLayout>
  );
};

export default NoteModal;
