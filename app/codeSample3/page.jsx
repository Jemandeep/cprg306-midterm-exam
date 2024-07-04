"use client";

import React from 'react';

const CodeSample3 = () => {
  const myList = ["Cat", "Dog", "Chicken", "Cow"];

  // Function to make the API call
  async function makeApiCall() {
    const passcode = 'ehen2rfow';
    const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      alert(`Secret Code: ${data.secretCode}`);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  }

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create a function that calls the following URL
          https://webdev2-class-demo.vercel.app/api/sampleReqs/. The function
          should be called on the click of the button below. This call is a GET
          request and it requires a passcode as part of the url for it to work.
        </p>
        <p>
          This passcode is: "ehen2rfow". It is to be appended to the URL. The
          response from this call will contain a json with a single field called
          "secretCode". This is the answer to your question.
        </p>
      </div>

      <div className="p-4">
        <button onClick={makeApiCall} className="bg-blue-500 text-white rounded px-4 py-2">
          Get Secret Code
        </button>
      </div>
    </div>
  );
};

export default CodeSample3;
