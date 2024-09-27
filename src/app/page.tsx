import { what_i_do } from "@/config/what-i-do"
import { cn, getExperienceYears } from "@/lib/utils"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
  const experienceYears: number = getExperienceYears()
  return (
    <div className="items-center justify-items-center gap-16">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">WHAT I DO?</h1>
        <div className="grid gap-8 py-8">
          {what_i_do.map((item, index) => (
            <div
              style={{
                top: `${(index + 1) * 2 + 5}rem`,
              }}
              key={index + 1}
              className={cn(
                "group sticky flex flex-col border bg-background/80 backdrop-blur-sm sm:flex-row print:bg-[#f4f4f4]"
              )}
            >
              <div className="grid p-6 sm:grid-cols-7">
                <div className="col-span-3 flex items-start gap-4 duration-200 sm:group-hover:-mt-2">
                  <h2 className="text-2xl font-normal">{item.title}</h2>
                  <ArrowTopRightIcon className="mt-2 size-6 shrink-0" />
                </div>
                <div></div>
                <p className="col-span-3 font-light text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-12">
          <h1 className="my-8 text-4xl font-semibold">WHY CHOOSE ME?</h1>
          <p className="mt-4 font-light text-muted-foreground">
            With over {experienceYears} years of full-stack development
            experience, I bring a proven track record of delivering
            high-quality, scalable solutions. I specialize in creating seamless
            user experiences, utilizing modern technologies like ReactJS,
            NextJS, NodeJS, and MongoDB. My client-centric approach ensures that
            your business goals are always front and center, while my commitment
            to industry best practices guarantees robust, secure, and optimized
            applications.
          </p>
          <p className="mt-4 font-light text-muted-foreground">
            I stay on the cutting edge of technology, ensuring that the
            solutions I deliver are not only effective today but also
            future-proof. From intuitive UI/UX design to backend integration, I
            offer end-to-end services with ongoing support to help your product
            evolve as your business grows. My transparency, integrity, and
            dedication to excellence make me the ideal partner for your next
            project.
          </p>
        </div>
        <div className="py-12">
          <h1 className="my-8 text-4xl font-semibold uppercase">
            Ready to bring your vision to life?
          </h1>
          <p className="mb-8 text-2xl font-light text-muted-foreground">
            Let&apos;s collaborate to create innovative, high-performance
            solutions tailored to your unique needs. Whether you&apos;re looking
            to build a new product or optimize an existing one, I&apos;m here to
            help you succeed. Reach out today, and let&apos;s turn your ideas
            into reality!
          </p>

          <Link
            className="mt-8 flex w-fit items-center gap-8 border bg-background/10 px-6 py-2 text-xl font-medium backdrop-blur-sm"
            href="mailto:contact@mkarna.com.np"
          >
            <span>Send an Email</span>
            <ArrowTopRightIcon className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
