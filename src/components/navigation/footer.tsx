import { siteConfig } from "@/config/site"
import Link from "next/link"
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
export function Footer() {
  return (
    <footer className="bottom-0 w-screen print:hidden">
      <div className="mx-auto max-w-4xl space-y-4 p-4">
        <div className="flex justify-between">
          <ul className="flex gap-3.5">
            <li>
              <Link
                href="https://www.linkedin.com/in/mukeshkarn/"
                className="duration-300 hover:text-blue-500"
              >
                <SiLinkedin className="size-4" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/mukeshkarna"
                className="duration-300 hover:text-violet-600"
              >
                <SiGithub className="size-4" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/karnamukesh"
                className="duration-300 hover:text-sky-600"
              >
                <SiFacebook className="size-4" />
              </Link>
            </li>
            {/* <li>
              <Link
                href="https://www.instagram.com/mukeshkarn/"
                className="duration-300 hover:text-pink-500"
              >
                <SiInstagram className="size-4" />
              </Link>
            </li> */}
          </ul>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground opacity-30 duration-200 hover:opacity-100">
            Designed with ❤️ by{" "}
            <a href="https://nischaltimalsina.com.np">nischaltimasina</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
