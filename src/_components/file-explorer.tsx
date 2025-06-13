import { CustomFile, Folder } from "@/_lib/types"
import FileCard from "./file-card"

export default function FileExplorer({folder}: {folder: Folder}) {

  const sortedSelectedFiles = (files: CustomFile[]) => {
    return files.sort((a, b) => b.lastModified.localeCompare(a.lastModified))
  }

  return (
    <div className="w-3/4 flex flex-wrap gap-2">
        {
            sortedSelectedFiles(folder.files).map(file => 
                <FileCard key={file.id} file={file} />
            )
        }
    </div>
  )
}
