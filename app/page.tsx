"use client";

import { useState } from "react";

export default function Home() {
  const [imageString, setImageString] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleButtonPressed() {
    setIsLoading(true);
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setImageString(data);
        setIsLoading(false);
      });
  }

  return (
    <main className="min-h-screen flex flex-col mx-auto justify-center items-center w-[640px]">
      <h1 className="text-2xl mb-4">Image recognition on RaspberryPi</h1>
      <div className="w-full h-[480px] border mb-6">
        {imageString && (
          <img src={imageString} className="w-full h-full object-cover" />
        )}
      </div>
      <button
        disabled={isLoading}
        onClick={handleButtonPressed}
        className="bg-slate-600 py-3 w-full">
        {isLoading ? "Fetching image..." : "Click for image"}
      </button>
    </main>
  );
}
