import { Folder } from "@/_lib/types";


export default function FolderStructure({folders, selectedFolder, setSelectedFolder}: {folders: Folder[], selectedFolder: Folder, setSelectedFolder: (folder: Folder) => void}) {
  return (
    <div className="w-1/4">
      {
        folders.map(folder => 
          <p 
          key={folder.id} 
          className={`text-xs cursor-pointer hover:bg-slate-500 ${folder.id === selectedFolder.id ? "bg-slate-500" : ""}`}
          onClick={() => setSelectedFolder(folder)}
          >
            {folder.name} {folder.files.length}
          </p>
        )
      }
    </div>
  )
}
