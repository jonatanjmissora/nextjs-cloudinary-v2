import { Folder } from "@/_lib/types";


export default function FolderStructure({folders}: {folders: Folder[]}) {
  return (
    <div>{JSON.stringify(folders)}</div>
  )
}
