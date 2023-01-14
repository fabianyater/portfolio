import Image from "next/image";

export default function ProjectCard({ title, description, image, links }) {
  return (
    <div className="w-80 flex flex-col items-center justify-center bg-primary rounded-lg">
      <div className="w-full inline-block relative">
        <Image src={image} alt={`Imagen del proyecto ${title}`} className="w-full object-cover rounded-tr-lg rounded-tl-lg" />
        <div className="absolute bg-gray-500 opacity-0 transition-opacity flex items-center justify-center gap-x-5 hover:opacity-100 rounded-tr-lg rounded-tl-lg w-full h-full top-0 left-0">
        {links.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              <Image src={item.icon} alt={item.name} width={40} height={40} />
            </a>
          ))}
        </div>
      </div>
      <article className="py-5 px-4 w-full flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-medium">{description}</p>
        {/* <div className="flex gap-2">
          {links.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              <Image src={item.icon} alt={item.name} width={20} height={20} />
            </a>
          ))}
        </div> */}
      </article>
    </div>
  )
}