import Image from "next/image";
import Link from "next/link";

import Icon from "../components/icon";
import profilePicture from "../images/profile.jpg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

import { menu } from "../utils/menu";
import { icons } from "../utils/icons";
import { projects } from "../utils/projects";
import Header from "../components/header";
import ProjectCard from "../components/project-card";

export default function Home() {
  return (
    <div className="container m-auto">
      {/* <header className="max-w-5xl h-20 bg-primary m-auto mt-12 flex items-center justify-center rounded-lg">
        <nav className="flex items-center justify-between w-full py-5 px-11">
          <h2>fyr(dev)</h2>
          <ul className="flex gap-8">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  className="transition hover:underline-offset-8"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <Link href="https://github.com/fabianyater" target="_blank">
              <Image src={github} alt="github" />
            </Link>
            <Link href="https://www.linkedin.com/in/fabianyr/" target="_blank">
              <Image src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </nav>
      </header> */}
      <Header />
      <main className="mt-24 mb-24">
        <section className="mx-auto text-center mt-36 mb-36" id="home">
          <div className="m-auto relative -z-10">
            <Image
              className="border border-gray-500 rounded-full m-auto"
              src={profilePicture}
              alt="Picture of myself"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold w-fit m-auto -mt-5 rounded-lg bg-yellow-400 py-3 px-6 text-primary">
            Hello, I'm Fabian Yate
          </h1>
          <h2 className="text-4xl font-medium mt-2">
            Backend and Frontend developer
          </h2>
          <p className="mt-8 font-light max-w-4xl text-2xl m-auto">
            Bueno, aquí va una breve descripción mía. Tengo que pensar bien que
            poner. Bueno, aquí va una breve descripción mía. Tengo que pensar
            bien que poner.
          </p>
        </section>
        <section className="mt-36 mb-36" id="skills">
          <h2 className="font-medium text-center text-3xl">Skills</h2>
          <div className="grid grid-cols-6 max-w-2xl items-center justify-items-center m-auto mt-16 gap-y-7">
            {icons.map((icon) => (
              <Icon key={icon.name} image={icon.icon} name={icon.name} />
            ))}
          </div>
        </section>
        <section id="projects" className="mt-36 mb-36">
          <h2 className="font-medium text-center text-3xl">Projects</h2>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 m-auto gap-11 mt-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                title={project.title}
                description={project.description}
                image={project.image}
                links={project.links}
              />
            ))}
          </div>
          <Link
            href="https://github.com/fabianyater?tab=repositories"
            target="_blank"
            className="block w-fit py-2 px-4 bg-primary font-medium text-lg text-center m-auto mt-8 rounded-lg hover:bg-black"
          >
            Ver más
          </Link>
        </section>
      </main>
    </div>
  );
}
