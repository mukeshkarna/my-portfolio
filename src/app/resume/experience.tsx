type WorkExperienceProps = {
  duration: string
  company: string
  employmentType: string
  jobTitle: string
  responsibilities: string[]
}

const WorkExperience = ({
  duration,
  company,
  employmentType,
  jobTitle,
  responsibilities,
}: WorkExperienceProps) => {
  return (
    <li className="space-y-2">
      <p className="text-sm text-muted-foreground">{duration}</p>
      <div className="flex items-end gap-2">
        <p className="text-xl font-normal">{company}</p>
        <p className="text-sm text-muted-foreground">{employmentType}</p>
      </div>
      <p className="pb-4 text-xl">{jobTitle}</p>
      <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>
            <p className="max-w-2xl">{responsibility}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default WorkExperience
