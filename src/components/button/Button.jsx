import React from "react";

export default function Button({ title, btnFunc }) {
  return (
    <div>
      <button
        className="py-3  px-6 bg-custom-gradient  border border-white rounded-full"
        onClick=""
      >
        {title}
      </button>
    </div>
  );
}
