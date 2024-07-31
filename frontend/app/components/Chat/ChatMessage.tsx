"use client";

import React, { useRef, ChangeEvent } from 'react';
import { Message } from "./types";
import ReactMarkdown from "react-markdown";
import { FaDatabase } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { SettingsConfiguration } from "../Settings/types";
import { IoCloudUpload } from "react-icons/io5";

interface ChatMessageProps {
  message: Message;
  handleCopyToBillboard: (m: string) => void;
  settingConfig: SettingsConfiguration;
}

const AudioUploadInterface = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Handle the audio file here
      console.log(file);
      // call the whisper API to upload the audio file
      // const formData = new FormData();
      // formData.append("file", file);
      // fetch("http://localhost:5000/upload", {
      //   method: "POST",
      //   body: formData,
      
    }
  };

  const handleClick = () => {
    fileInput.current?.click();
  };

  return { handleAudioUpload, handleClick, fileInput };
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  handleCopyToBillboard,
  settingConfig,
}) => {
  const { handleAudioUpload, handleClick, fileInput } = AudioUploadInterface();

  return (
    <div
      className={`flex items-end gap-2 ${message.type === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex flex-col items-start p-4 rounded-xl animate-press-in shadow-md sm:text-sm md:text-base ${message.type === "user" ? "bg-primary-verba" : "bg-bg-verba"}`}
      >
        {message.cached && <FaDatabase size={12} className="text-text-verba" />}
        {message.type === "system" ? (
          <ReactMarkdown
            className="prose md:prose-base sm:prose-sm p-3 prose-pre:bg-bg-alt-verba"
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={
                      settingConfig.Customization.settings.theme === "dark"
                        ? (oneDark as any)
                        : (oneLight as any)
                    }
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
          
        ) : (
          <div className="whitespace-pre-wrap">{message.content}</div> // Use whitespace-pre-wrap for user messages
        )}
              <form className="flex justify-between w-full items-center gap-3">
        <input
          type="file"
          accept="audio/*"
          ref={fileInput}
          onChange={handleAudioUpload}
          className=" bg-bg-alt-verba textarea textarea-xs p-2 text-sm md:text-base w-full"
          style={{ display: 'none' }}
        />
        <ReactMarkdown className="prose md:prose-base sm:prose-sm p-3 prose-pre:bg-bg-alt-verba">
          Upload an audio file
        </ReactMarkdown>
        <button
          onClick={handleClick}
          className="btn btn-circle border-none shadow-none bg-bg-alt-verba hover:bg-secondary-verba"
        >
          <IoCloudUpload size={22} />
        </button>
      </form>
      </div>
    </div>
  );
};

export default ChatMessage;