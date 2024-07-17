"use client";

import { useState } from "react";
import { ContentPaste, Done } from "@mui/icons-material";

export default function Code({ id, example }: { id: string; example: string }) {
  const [completedCopy, setCompletedCopy] = useState(false);

  const handleCopy = () => {
    setCompletedCopy(true);
    const codeForCopy = document.getElementById(id)!.innerText;
    navigator.clipboard.writeText(codeForCopy);

    const timeoutId = setTimeout(() => {
      setCompletedCopy(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="relative">
      <button className="absolute top-5 right-5 z-10 space-x-2.5" onClick={handleCopy}>
        {completedCopy ? (
          <>
            <span className="p-1.5 bg-zinc-400 text-white rounded">copied!</span>
            <Done className="text-green-400" />
          </>
        ) : (
          <ContentPaste className="text-zinc-400" />
        )}
      </button>
      <pre className="pr-14">
        <code id={id} className="text-wrap">
          {example}
        </code>
      </pre>
    </div>
  );
}
