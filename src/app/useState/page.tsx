import Files from "@/_components/useState/files"
import Folders from "@/_components/useState/folder"
import { getAssets } from "@/_data/get-assets"
import { Suspense } from "react"

export default function page() {

    const assetsPromise = getAssets()

  return (
    <div>
        
        <h2>ESTOY RECIBIENDO ---</h2>
        
        <div className="w-full h-full flex">

            <Suspense fallback={<h3>SUSPENSE ....</h3>}>
                <Folders assetsPromise={assetsPromise} />
            </Suspense>

            <Suspense fallback={<h3>SUSPENSE ....</h3>}>
                <Files assetsPromise={assetsPromise} />
            </Suspense>
        </div>

    </div>
  )
}
