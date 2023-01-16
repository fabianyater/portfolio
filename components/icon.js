import Image from "next/image";

export default function Icon ( {image, name} ) {
  return(
    <div className="flex flex-col gap-1 items-center justify-center w-6 h-6 sm:w-full">
      <Image src={image} alt={name} className="transition-all hover:scale-125" />
      <p className="text-xs sm:font-medium sm:text-base">{name}</p>
    </div>
  )
}