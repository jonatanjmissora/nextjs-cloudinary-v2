import { CloudinaryAsset } from "@/_lib/types";
import { setFoldersFromAssets } from "@/_lib/utils/set-folders";
import FileCard from "../file-card";

export default async function Files({assetsPromise}:{assetsPromise: Promise<{success: boolean, response: CloudinaryAsset[], message: string}>}) {

    let assets: CloudinaryAsset[] = []
    try {
        const {success, response, message} = await assetsPromise
        if(success) assets = response
        else throw new Error(message)
    } catch (error) {
        console.log(error)
    }

    const folders = setFoldersFromAssets(assets)

  return (
    <div className="w-3/4 flex flex-wrap gap-2">
        {folders[0].files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
        </div>
  )
}
