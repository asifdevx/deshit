import Image from "next/image";
import { memo } from "react";


  
  
 export const ThumbnailList = memo(({ images }: { images: string[] }) => {
    if (images.length < 1) return null;
    return (
      <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`screenshot ${i + 1}`}
            width={90}
            height={90}
            loading="lazy"
            className="rounded-md border border-gray-700 object-cover flex-shrink-0"
          />
        ))}
      </div>
    );
  });
  ThumbnailList.displayName = "ThumbnailList";