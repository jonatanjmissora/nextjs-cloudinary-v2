
import { Suspense } from "react";
import {getAssets} from "../_data/get-assets"
import Dashboard from "@/_components/dashboard";

export default async function Home() {
  
  const assets = await getAssets()

  return (
    <div className="">
        
      <Suspense fallback={<div>LOADING...</div>}>
        <Dashboard assets={assets.resources} />
      </Suspense>

    </div>
  );
}
