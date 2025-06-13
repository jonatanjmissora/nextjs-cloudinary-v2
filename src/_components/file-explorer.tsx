import { Folder } from "@/_lib/types"

export default function FileExplorer({selectedFolder}: {selectedFolder: Folder}) {
  return (
    <div className="w-3/4">
        <p key={selectedFolder.id} className="text-xs">{selectedFolder.name} {selectedFolder.files.length}</p>
    </div>
  )
}
