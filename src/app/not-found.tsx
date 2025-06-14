import Link from "next/link";


export default function notFound() {
  return (
    <div className="text-xl w-full h-full flex flex-col justify-center items-center">
        <p>ruta no encontrada</p>
        <Link href={"/"} className="px-2 py-1 bg-amber-900">Volver al inicio</Link>    
    </div>
  )
}
