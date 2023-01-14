import Image from "next/image";

export default function Icon ( {image, name} ) {
  return(
    <div className="flex flex-col gap-1 items-center justify-center">
      <Image src={image} alt={name} className="transition-all hover:scale-125" />
      <p>{name}</p>
    </div>
  )
}