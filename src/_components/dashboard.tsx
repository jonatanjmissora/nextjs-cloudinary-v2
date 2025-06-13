"use client"

import { Folder } from "@/_lib/types"
import FolderStructure from "./folder-structure"
import FileExplorer from "./file-explorer"
import { useState } from "react"

export default function Dashboard({folders}: {folders: Folder[]}) {

    const [selectedFolder, setSelectedFolder] = useState<Folder>(folders[0])
  
    return (
    <div className="flex">

      <FolderStructure folders={folders} selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder}/>

      <FileExplorer selectedFolder={selectedFolder} />
    </div>
  )
}
