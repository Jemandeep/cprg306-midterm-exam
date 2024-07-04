"use client";
import React from "react";

const APICallExam = () => {
  const passcode = process.env.NEXT_PUBLIC_MY_PASSCODE;

  const handleClick = () => {
    alert(`Passcode: ${passcode}`);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button onClick={handleClick} className="bg-red-100 p-2 rounded-md border border-red-500">
          Show Passcode
        </button>
      </div>
    </div>
  );
};

export default APICallExam;
