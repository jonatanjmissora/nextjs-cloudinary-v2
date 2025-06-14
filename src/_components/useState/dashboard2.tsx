
export default function dashboard2({assetsPromise}:{assetsPromise: Promise<{success: boolean, response: CloudinaryAsset[], message: string}>}) {



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
