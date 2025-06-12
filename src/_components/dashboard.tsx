import { CloudinaryAsset } from "@/_lib/types"
import FolderStructure from "./folder-structure"
import { setFoldersFromAssets } from "@/_lib/utils/set-folders"

export default function Dashboard({assets}: {assets: CloudinaryAsset[]}) {
  
    console.log(assets)

    return (
    <div className="">

      <FolderStructure folders={setFoldersFromAssets(assets)} />

      {
        assets.map(asset => 
          <p key={asset.public_id}>{asset.asset_folder} - {asset.display_name}</p>
        )
      }
    </div>
  )
}
