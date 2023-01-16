import Image from "next/image";
import Link from "next/link";

import Icon from "../components/icon";
import profilePicture from "../images/profile.jpg";

import { icons } from "../utils/icons";
import { projects } from "../utils/projects";
import Header from "../components/header";
import ProjectCard from "../components/project-card";
import Form from "../components/form";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container m-auto">
        <section className="mx-auto text-center mt-10 mb-12 sm:mt-20 sm:mb-20" id="home">
          <div className="w-52 m-auto relative -z-10">
            <Image
              className="w-full h-full border border-gray-500 rounded-full m-auto"
              src={profilePicture}
              alt="Picture of myself"
              priority
            />
          </div>
          <div className="w-80 m-auto sm:w-2/3">
            <h1 className="text-2xl sm:text-4xl font-bold w-fit m-auto -mt-5 rounded-lg bg-yellow-400 py-2 px-5 text-primary">
              Hello, I'm Fabian Yate
            </h1>
            <h2 className="text-2xl sm:text-4xl font-medium mt-2">
              Backend and Frontend developer
            </h2>
            <p className="mt-8 font-light max-w-4xl text-2xl sm:text-2xl m-auto">
              Bueno, aquí va una breve descripción mía. Tengo que pensar bien
              que poner. Bueno, aquí va una breve descripción mía. Tengo que
              pensar bien que poner.
            </p>
          </div>
        </section>
        <section className=" mt-10 mb-14 sm:mt-20 sm:mb-20" id="skills">
          <h2 className="font-medium text-center text-3xl">Skills</h2>
          <div className="grid grid-cols-5 sm:grid-cols-6 sm:max-w-2xl items-center justify-items-center m-auto mt-16 gap-y-12 px-8 sm:px-0 sm:gap-y-20">
            {icons.map((icon) => (
              <Icon key={icon.name} image={icon.icon} name={icon.name} />
            ))}
          </div>
        </section>
        <section id="projects" className=" mt-10 mb-14 sm:mt-20 sm:mb-20">
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
        <section id="contact" className=" mt-10 mb-12 sm:mt-20 sm:mb-20">
          <h2 className="font-medium text-center text-3xl">Contact me</h2>
          <p className="text-center mt-9 font-light text-2xl">
            Thanks for visiting my site. If you want to get in contact with me
            please fill out the contact form.
          </p>
          <Form />
        </section>
      </main>
    </>
  );
}
