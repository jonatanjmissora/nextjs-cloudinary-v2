"use client"

import { Folder } from "@/_lib/types";
import { useSearchParams, useRouter } from "next/navigation";

export default function FolderStructure({ folders, folder }: { folders: Folder[], folder: Folder }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelectFolder = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('folder', folders.find(f => f.id === id)?.name || "Todas");
    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="w-1/4">
      {
        folders.map(({id, name, files}) => 
          <p 
          key={id} 
          className={`text-xs cursor-pointer hover:bg-slate-500 ${id === folder.id ? "bg-slate-500" : ""}`}
          onClick={() => handleSelectFolder(id)}
          >
            {name} {files.length}
          </p>
        )
      }
    </div>
  )
}
