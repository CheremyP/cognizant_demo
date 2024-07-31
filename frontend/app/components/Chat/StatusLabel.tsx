"use client";

import React from "react";
import { IconType } from "react-icons";

interface StatusLabelProps {
  status: boolean;
  true_text: string;
  false_text: string;
  icon?: IconType;
}

const StatusLabel: React.FC<StatusLabelProps> = ({
  status,
  true_text,
  false_text,
  icon: Icon,
}) => {
  return (
    <div
      className={`flex items-center gap-2 p-2 rounded-lg text-text-verba text-sm ${status ? "bg-secondary-verba" : "bg-bg-alt-verba text-text-alt-verba"}`}
    >
      {Icon && <Icon />}
      <p
        className={`text-xs ${status ? "text-text-verba" : "text-text-alt-verba"}`}
      >
        {status ? true_text : false_text}
      </p>
    </div>
  );
};

export default StatusLabel;