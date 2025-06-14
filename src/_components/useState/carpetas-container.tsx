import Carpetas from "@/_components/useState/carpetas"
import Folders from "@/_components/useState/files"
import { getAssets } from "@/_data/get-assets"
import { Suspense } from "react"

export default async function page() {

    const assets = getAssets()

  return (
    <div>
        
        <Suspense fallback={<h3>SUSPENSE ....</h3>}>
            <Folders assets={assets} />
        </Suspense>

    </div>
  )
}
