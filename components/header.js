import Image from "next/image"
import Link from "next/link"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

export default function Header() {
  const menu = [
    {
      name: 'Home',
      href: '#home'
    },
    {
      name: 'Skills',
      href: '#skills'
    },
    {
      name: 'Projects',
      href: '#projects'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ]

  return (
    <header className="h-20 bg-primary m-auto mt-12 flex items-center justify-center rounded-lg">
      <nav className="flex items-center justify-between w-full py-5 px-11">
        <h2>fyr(dev)</h2>
        <ul className="flex gap-8">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:underline-offset-8">
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
    </header>
  )
}