import { CloudinaryAsset } from "@/_lib/types";
import { setFoldersFromAssets } from "@/_lib/utils/set-folders";

export default async function Folders({assetsPromise}:{assetsPromise: Promise<{success: boolean, response: CloudinaryAsset[], message: string}>}) {

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
    <div className="w-1/4 flex flex-col gap-2">
        {folders.map((folder) => (
          <p key={folder.id}>{folder.name}</p>
        ))}
        </div>
  )
}