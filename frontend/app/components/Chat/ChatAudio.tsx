import React, { useRef, ChangeEvent } from 'react';
// import { IoMdSend, IoIosRefresh } from 'react-icons/io';
import StatusLabel from "./StatusLabel";
import { FaDatabase } from "react-icons/fa";
import NavbarButton from "../Navigation/NavButton";
import { PiGraph } from "react-icons/pi";
import { TbVector } from "react-icons/tb";

const AudioUploadInterface = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Handle the audio file here
      console.log(file);
    }
  };

  const handleClick = () => {
    fileInput.current?.click();
  };

  return (
    <div className="flex flex-col bg-bg-alt-verba rounded-lg shadow-lg p-5 text-text-verba gap-5 min-h-[9.3vh]">
      <form className="flex justify-between w-full items-center gap-3">
        <StatusLabel
          status={true} // or false, depending on the desired value
          true_text="Database"
          false_text="No Suggestions"
        />
        {/* <div
          className="tooltip text-text-verba"
          data-tip="Reset Conversation"
        >
          <button
            type="button"
            onClick={() => {
              // Reset logic here
            }}
            className="btn btn-circle border-none shadow-none bg-bg-alt-verba hover:bg-secondary-verba"
          >
            <IoIosRefresh size={18} />
          </button>
        </div> */}
      </form>
      <div className="flex gap-3">
        <NavbarButton
          Icon={FaDatabase}
          title="Relational Db"
          currentPage="UPLOAD"
          setCurrentPage={() => {}}
          APIHost={null}
          setPage="CHAT"
          iconSize={20}
          hide={false}
          
        />
        <NavbarButton
          Icon={TbVector}
          title="Vector Db"
          currentPage="UPLOAD"
          setCurrentPage={() => {}}
          APIHost={null}
          setPage="CHAT" // Change the value of setPage to a valid type
          iconSize={20}
          hide={false}
        />
        <NavbarButton
          Icon={PiGraph}
          title="Graph Db"
          currentPage="UPLOAD"
          setCurrentPage={() => {}}
          APIHost={null}
          setPage="CHAT"
          iconSize={20}
          hide={false}
        />
      </div>
    </div>
  );
};

export default AudioUploadInterface;