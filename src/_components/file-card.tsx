import { CustomFile } from "@/_lib/types";
import { CldImage } from "next-cloudinary";

export default function FileCard({file}: {file: CustomFile}) {
  return (
    <div>
    <CldImage
    className="flex-1 min-w-max h-[200px] object-cover"
        width="200"
        height="200"
        src={file.id}
        sizes="100vw"
        alt={file.name}
    />
    <p className="text-xs">{file.lastModified.substring(0, 10)}</p>
    </div>
  )
}
