"use client"

import { Folder } from "@/_lib/types"
import FolderStructure from "./folder-structure"
import FileExplorer from "./file-explorer"

export default function Dashboard({folders, folder}: {folders: Folder[], folder: Folder}) {
  
    return (
    <div className="flex">

      <FolderStructure folders={folders} folder={folder}/>

      <FileExplorer folder={folder} />

    </div>
  )
}
