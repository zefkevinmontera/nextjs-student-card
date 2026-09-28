'use client'; 
import { useState } from 'react';

export default function StudentCard({ name, course, year }) {

  const [message, setMessage] = useState("Hello, Student!");

  const handleClick = () => {
    setMessage("Welcome to Next.js!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10 border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider">STUDENT CARD</h2>
      
      <div className="space-y-1 mb-6 text-gray-700">
        <p className="font-semibold">{name}</p>
        <p>{course}</p>
        <p>{year}</p>
      </div>

      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>

      <p className="mt-4 text-gray-800 font-medium">{message}</p>
    </div>
  );
}