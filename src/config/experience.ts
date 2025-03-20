import moment from "moment"
const current = moment().format("MMM YYYY")
export const work_experience = [
  {
    jobTitle: "Senior Software Developer",
    company: "Threatsview LLC",
    duration: `Sep 2023 - Present (${current}) | ${moment(current).diff("Sep 2023", "months")} months`,
    responsibilities: [
      "Lead and participate in the design, development, and implementation of software solutions.",
      "Provide technical guidance and mentorship to the development team.",
      "Conduct thorough code reviews to ensure code quality and adherence to best practices.",
      "Collaborate with cross-functional teams to contribute to architectural decisions.",
      "Stay updated with the latest industry trends and technologies to drive technical excellence and ensure successful project delivery.",
    ],
    employmentType: "Full Time",
  },
  {
    jobTitle: "Senior Software Engineer",
    company: "PenIT Technology Pte Ltd",
    duration:
      "Oct 2021 - Sep 2023" +
      " | " +
      moment("Sep 2023").diff("Oct 2021", "months") +
      " months",
    responsibilities: [
      "Managed multiple projects and coordinated the team to ensure timely completion of deliverables.",
      "Oversaw project development phases, ensuring alignment with client requirements and company standards.",
      "Actively communicated project progress and addressed any issues that arose during the project lifecycle.",
      "Lead the design, development, and deployment of scalable software solutions.",
      "Provide technical guidance, mentorship, and code reviews to ensure high-quality development.",
      "Collaborate with cross-functional teams to define technical requirements and deliver robust solutions.",
      "Contribute to system architecture, design patterns, and best coding practices.",
      "Optimize application performance, scalability, and security.",
      "Stay up-to-date with emerging technologies and integrate them into development processes.",
      "Drive continuous improvement in software development lifecycle and DevOps practices.",
    ],
    employmentType: "Full Time",
  },
  {
    jobTitle: "Associate Software Engineer",
    company: "Leapfrog Technology",
    duration:
      "Jan 2021 - Sep 2021" +
      " | " +
      moment("Sep 2021").diff("Jan 2021", "months") +
      " months",
    responsibilities: [
      "Developed software applications under supervision, ensuring high quality and compliance with coding standards.",
      "Collaborated within a team to create efficient software solutions, actively contributing to project discussions and decisions.",
      "Conducted requirement analysis and was responsible for estimation, development, and testing of assigned tasks.",
      "Engaged in continuous learning to implement new technologies and improve development efficiency.",
      "Develop software engineer applications with supervision",
      "Work collaboratively within the team to develop high quality software solutions",
      "Follow company's coding standards, policies, processes and working culture",
      "Communicate new ideas, issues, status and outcomes with supervisor/team",
      "Continuous research and learning; discover, evaluate and implement new technologies to maximize development efficiency.",
      "Completely responsible for requirement analysis, estimation, development and testing of assigned tasks",
      "Learn and apply version control tool, project management tool, agile methodology, project level technologies and code review process",
      "Understand assigned project's overall business domain, clients and technologies used",
      "Delphi (NDA Project)- Polymer JS Worked as Fronted Developer. Pipeline (NDA Project) - Polymer JS, Firebase Worked as Frontend Developer",
    ],
    employmentType: "Full Time",
  },
  {
    jobTitle: "Junior Node Developer",
    company: "E.K. Solutions Pvt. Ltd.",
    duration:
      "Dec 2018 - Dec 2020" +
      " | " +
      moment("Dec 2020").diff("Dec 2018", "months") +
      " months",
    responsibilities: [
      "Worked as a Node.js developer on four projects, contributing primarily to backend development.",
      "Participated as a full-stack developer on two projects using the MEVN stack.",
      "Assist in the development, testing, and maintenance of backend applications using Node.js.",
      "Work with Express.js and other frameworks to build RESTful APIs.",
      "Integrate third-party services, APIs, and databases such as PostgreSQL, MySQL, or MongoDB.",
      "Write clean, efficient, and well-documented code following best practices.",
      "Debug and troubleshoot issues to improve application performance and stability.",
      "Collaborate with senior developers, frontend teams, and stakeholders to deliver high-quality features.",
      "Participate in code reviews and follow Agile development methodologies.",
      "Learn and stay updated with the latest Node.js and JavaScript technologies.",
    ],
    employmentType: "Full Time",
  },
  {
    jobTitle: "Junior PHP Developer",
    company: "Classic Tech",
    duration:
      "Mar 2018 - Jul 2018" +
      " | " +
      moment("Jul 2018").diff("Mar 2018", "months") +
      " months",
    responsibilities: [
      "Developed a Stock Management Module in HRIS using CodeIgniter, jQuery, JavaScript, and AJAX.",
      "Collaborated on various project phases, ensuring successful integration of functionality and user experience.",
    ],
    employmentType: "Full Time",
  },
]
