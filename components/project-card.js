import Image from "next/image";

export default function ProjectCard({ title, description, image, links }) {
  return (
    <div className="flex flex-col items-center justify-center bg-primary rounded-lg">
      <Image src={image} alt={`Imagen del proyecto ${title}`} className="w-full object-cover rounded-tr-lg rounded-tl-lg" />
      <article className="py-5 px-4 w-full flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-medium">{description}</p>
        <div className="flex gap-2">
          {links.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              <Image src={item.icon} alt={item.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </article>
    </div>
  )
}