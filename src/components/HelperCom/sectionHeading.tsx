import React from 'react'
import Image from "next/image";

const SectionHeading = ( { title , hasDes,description,  }:{title:string,hasDes:boolean,description?:string}) => {
  return (
    <div className="max-screen flex flex-col items-start gap-3 ">
        <div className="flex items-center gap-2">
          <Image
            src={"/logOut.png"}
            width={70}
            height={70}
            alt="section_icon"
            className="object-contain rounded-full"
          />
          <h1 className="font-SemiBold text-3xl md:text-5xl"> {title}</h1>
        </div>
        {hasDes && (

        <p className="text-[#DBB9B9BA] w-5/6 break-words text-base">
          {description}
        </p>
        )

        }
      </div>
  )
}

export default SectionHeading