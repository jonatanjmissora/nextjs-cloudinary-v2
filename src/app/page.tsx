
import { Suspense } from "react";
import {getAssets} from "../_data/get-assets"
import Dashboard from "@/_components/dashboard";
import { Folder } from "@/_lib/types";
import { setFoldersFromAssets } from "@/_lib/utils/set-folders";

export default async function Home() {
  
  let folders: Folder[] = []
  
  const {success, assets, message} = await getAssets()
  if(!success){
    return (
      <div className="">
        <p>Error al cargar los assets: {message}</p>
      </div>
    )
  } else {
    folders = setFoldersFromAssets(assets)
  }

  return (
    <div className="">
        
      <Suspense fallback={<div>LOADING...</div>}>
        <Dashboard folders={folders} />
      </Suspense>

    </div>
  );
}
