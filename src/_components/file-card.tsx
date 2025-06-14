"use client"

import { CustomFile } from "@/_lib/types";
import { setFileDate, setFileSize } from "@/_lib/utils/file-data";
import { CldImage } from "next-cloudinary";

export default function FileCard({file}: {file: CustomFile}) {
  return (
    <div className="flex flex-col">

      <div className="flex justify-between px-1">
        <span className="text-xs truncate">{file.name}</span>
        <span className="text-xs">M</span>
      </div>

      {/* <div className="relative"> */}

        {/* <button className="absolute right-2 bottom-2 rounded-full bg-black/70 cursor-pointer px-2 hover:text-red-800">H</button> */}

        <CldImage
          className="h-[250px] w-auto object-cover"
          width="250"
          height="250"
          src={file.id}
          sizes="100vw"
          alt={file.name}
        />
      {/* </div> */}

      <div className="flex justify-between px-1">
        <span className="text-xs">{setFileDate(file.lastModified)}</span>
        <span className="text-xs">{setFileSize(file.size)}</span>
      </div>

    </div>
  )
}
