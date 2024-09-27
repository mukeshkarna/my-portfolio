import { education } from "@/config/education"
import { work_experience } from "@/config/experience"
import { projects } from "@/config/projects"
import { print } from "@/lib/actions"
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiJirasoftware,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss
} from "react-icons/si"
import WorkExperience from "./experience"

export function Resume() {
  const skills = [
    "ReactJS",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "Laravel PHP Framework",
    "RESTful API",
    "GraphQL",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "MERN Stack",
    "ElectronJS",
    "Docker",
    "TailwindCSS",
    "Bootstrap",
    "Material UI",
    "Adobe Photoshop CC",
    "Git/GitHub",
    "CI/CD Pipelines",
    "Jira",
    "Agile Methodologies",
  ]

  const competencies = [
    "Project Management",
    "Technical Leadership",
    "Analytical Thinking",
    "Problem Solving",
    "Code Review & Quality Assurance",
    "Cross-Functional Collaboration",
    "Mentoring & Team Leadership",
    "Agile & Scrum Methodologies",
    "Time Management",
    "Adaptability",
    "Client Communication",
    "Software Architecture Design",
  ]

  const interests = [
    "Full-Stack Development",
    "Innovative Web Solutions",
    "Reading Technical Books",
    "Exploring Emerging Tech Trends",
    "Music",
    "Digital Painting",
    "Continuous Learning",
  ]

  const languages = [
    "Nepali (Native)",
    "Maithili (Bilingual)",
    "English",
    "Hindi",
  ]

  return (
    <section>
      <div className="container fixed bottom-14 right-4 flex h-0 justify-end print:hidden">
        <button className="h-11 bg-accent px-4" onClick={print}>
          Download
        </button>
      </div>
      <div
        id="resume"
        className="container max-w-5xl py-6 font-extralight print:font-normal print:text-black"
      >
        <div className="flex flex-wrap gap-2 pb-8">
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiNodedotjs className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiNextdotjs className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiReact className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiNestjs className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiLaravel className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiPhp className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiJirasoftware className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiTailwindcss className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiBootstrap className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiAdobephotoshop className="h-7 w-7 print:text-black" />
          </div>
          <div className="rounded-lg bg-foreground/10 p-4">
            <SiAdobeillustrator className="h-7 w-7 print:text-black" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 bg-foreground/5 py-4 pl-4 md:col-span-2 print:bg-transparent print:pl-0 print:sm:col-span-2">
            <h2 className="mb-4 text-2xl font-normal">Education</h2>
            {education.map((item) => (
              <div key={item.level} className="pt-4">
                <p className="hidden text-sm text-muted-foreground">
                  {item.year}
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-lg">{item.institute}</p>
                </div>
                <p className="text-muted-foreground">{item.level}</p>
              </div>
            ))}
            <h2 className="mt-8 text-2xl font-normal">Honors/Awards</h2>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">2015/2016</p>
              <div className="flex items-end gap-2">
                <p className="text-xl">Top 10 Counselor of the year</p>
              </div>
              <p className="pb-4 text-lg text-muted-foreground"></p>
            </div>
            <h2 className="mt-8 text-2xl font-normal">Skills Summary</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 md:max-w-sm">
              {skills.map((skill, index) => (
                <p key={skill.trim() + index} className="text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
            <h2 className="mt-8 text-2xl font-normal">Core Competencies</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 md:max-w-sm">
              {competencies.map((skill, index) => (
                <p key={skill.trim() + index} className="text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
            <h2 className="mt-8 text-2xl font-normal">Interests & Hobbies</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 md:max-w-sm">
              {interests.map((skill, index) => (
                <p key={skill.trim() + index} className="text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
            <h2 className="mt-8 text-2xl font-normal">Languages</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 md:max-w-sm">
              {languages.map((skill, index) => (
                <p key={skill.trim() + index} className="text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div className="col-span-5 py-4 md:col-span-3 print:sm:col-span-3">
            <h2 className="text-2xl font-normal">Experiences</h2>
            <ul className="space-y-8 pt-8">
              {work_experience.map((experience, index) => (
                <WorkExperience
                  key={index}
                  duration={experience.duration}
                  company={experience.company}
                  employmentType={experience.employmentType}
                  jobTitle={experience.jobTitle}
                  responsibilities={experience.responsibilities}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8">
          {" "}
          <h2 className="text-2xl font-normal">Projects</h2>
          <div className="grid gap-4 pt-8 sm:grid-cols-2">
            {projects.map((item) => (
              <div
                key={item.name}
                className="bg-foreground/5 p-4 print:bg-[#f4f4f4]"
              >
                <h2 className="text-xl font-normal">{item.name}</h2>
                <div className="pt-1">
                  <p className="text-sm text-muted-foreground"></p>
                  <div className="flex items-end gap-2">
                    <p className="text-sm font-normal">{item.role}</p>
                  </div>
                  <p className="pt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-normal">References</h2>
          <div className="pt-6">
            <div className="flex items-end gap-2">
              <p className="text-xl">Available Upon Request</p>
            </div>
            <p className="pb-4 text-lg text-muted-foreground">
              Please send an inquiry at contact@mkarna.com.np
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
