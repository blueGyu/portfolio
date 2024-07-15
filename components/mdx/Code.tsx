"use client";

import { useState } from "react";
import { ContentCopy, Done } from "@mui/icons-material";

export default function Code({ example }: { example: string }) {
  const [completedCopy, setCompletedCopy] = useState(false);

  const handleCopy = () => {
    setCompletedCopy(true);
    const codeForCopy = document.getElementById("code")!.innerText;
    navigator.clipboard.writeText(codeForCopy);

    const timeoutId = setTimeout(() => {
      setCompletedCopy(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="relative">
      <button className="absolute top-5 right-5 z-10 space-x-5" onClick={handleCopy}>
        {completedCopy ? (
          <>
            <span className="p-1.5 bg-zinc-500 text-white rounded">copied!</span>
            <Done className="text-green-400" />
          </>
        ) : (
          <ContentCopy className="text-zinc-500" />
        )}
      </button>
      <pre>
        <code id="code" className="language-Javascript">
          {example}
        </code>
      </pre>
    </div>
  );
}
