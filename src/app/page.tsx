
import { Suspense } from "react";
import {getAssets} from "../_data/get-assets"
import Dashboard from "@/_components/dashboard";
import { Folder } from "@/_lib/types";
import { setFoldersFromAssets } from "@/_lib/utils/set-folders";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  
  const folderName = (await searchParams).folder ?? "Todas"
  
  const {success, assets, message} = await getAssets()

  if(!success) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500">Error al cargar los assets: {message}</p>
        </div>
      </div>
    )
  }

  const folders: Folder[] = setFoldersFromAssets(assets)
  const folder = folders.find(f => f.name === folderName) || folders[0]

  return (
    <div className="">
        
      <Suspense fallback={<div>LOADING...</div>}>
        <Dashboard folders={folders} folder={folder}/>
      </Suspense>

    </div>
  );
}
