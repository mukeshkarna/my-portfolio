import React from "react"
import { SlCompass, SlEnvolope, SlGlobe, SlPhone } from "react-icons/sl"
import { ThemeSwitch } from "../shared/theme-switcher"
import Link from "next/link"
export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-4xl px-4 print:max-w-5xl print:font-normal print:text-black">
        <div className="fixed left-0 top-0 z-50 col-span-2 flex w-full items-center justify-between bg-background/10 py-2 backdrop-blur-md print:hidden">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-4">
            <Link href="/">
              <p className="bg-accent p-1 text-2xl font-bold">m.</p>{" "}
            </Link>
            <ThemeSwitch className="ml-auto cursor-pointer" />
            <Link href="/resume" className="flex items-center gap-2">
              Resume
            </Link>
            <Link
              href="mailto:contact@mkarna.com.np"
              className="flex items-center gap-2"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-8 pt-24 sm:pt-40 print:pt-16">
          <div className="flex flex-col justify-between gap-2">
            <p className="pl-1 text-xl print:hidden">Hi, I&apos;m</p>
            <h1 className="hidden text-4xl font-normal leading-none duration-200 sm:text-5xl md:text-6xl print:block">
              Mukesh Karna
            </h1>
            <h1 className="flex-col text-5xl font-bold leading-[1.2] sm:flex sm:text-7xl print:hidden">
              <span className="font-light tracking-tighter">MUKESH</span>
              <span className="ml-2 text-4xl sm:ml-0 sm:text-5xl">KARNA</span>
            </h1>
            <h2 className="font-light text-muted-foreground duration-200 sm:text-xl md:text-2xl print:hidden">
              A Full Stack Developer based in Kathmandu, Nepal
            </h2>
            <h2 className="hidden font-light text-muted-foreground duration-200 sm:text-xl md:text-2xl print:block print:font-normal print:text-black">
              Full Stack Developer | Kathmandu, Nepal
            </h2>
          </div>
          <p className="text-pretty font-light text-muted-foreground text-justify">
            An experienced Full-Stack Developer with expertise in both frontend
            and backend technologies. Specializing in building dynamic,
            high-performance web applications using modern tools and frameworks
            like Node.js, React.js, Next.js, MongoDB, Laravel, PostgreSQL, PHP, MySQL, Bootstrap,
            TailwindCSS, and more. Skilled in creating intuitive and engaging
            user interfaces, with a strong flair for design and a focus on
            delivering user-friendly, scalable solutions.
          </p>
          <div className="text-sm">
            <div className="flex flex-wrap justify-between gap-6">
              <p className="flex items-center gap-2 duration-300 hover:text-amber-600">
                <SlCompass className="text-muted-foreground" />
                Kathmandu, Nepal
              </p>
              <Link
                href="tel:+9779855011882"
                className="flex items-center gap-2 duration-300 hover:text-amber-600"
              >
                <SlPhone className="text-muted-foreground" />
                +977-985-1179241
              </Link>
              <Link
                href="mailto:contact@mkarna.com.np"
                className="flex items-center gap-2 duration-300 hover:text-amber-600"
              >
                <SlEnvolope className="text-muted-foreground" />
                contact@mkarna.com.np
              </Link>
              <Link
                href="https://mkarna.com.np"
                target="_blank"
                className="flex items-center gap-2 duration-300 hover:text-amber-600"
              >
                <SlGlobe className="text-muted-foreground" />
                mkarna.com.np
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
