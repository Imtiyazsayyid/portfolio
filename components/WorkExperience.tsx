import React from "react";
import { Timeline } from "./ui/Timeline";
import ListItem from "./ui/ListItem";

const data = [
  {
    title: "Jun 2023 - Aug 2024",
    content: (
      <div>
        <img
          src="https://media.licdn.com/dms/image/v2/C4D0BAQFz18vqLG0cqA/company-logo_200_200/company-logo_200_200/0/1631349927484?e=1738195200&v=beta&t=SYXN8FBp-8iHpYQbNnqTuRwM5-QKJgajNl9fDL3Yp8U"
          alt=""
          className="h-40 w-40 rounded-xl mb-5"
        />
        <h1 className="text-4xl font-bold mb-2">Binary Numbers</h1>
        <p className="text-xl font-bold text-gray-700">Junior Full Stack Developer Intern</p>
        <div className="mt-4 md:w-3/4 pr-5 flex flex-col gap-2">
          <ListItem>
            Adapted to the company’s processes as a fresher with a hands-on focus on frontend development.
          </ListItem>
          <ListItem>
            Received guidance on backend technologies, transitioning to Node.js for server-side programming.
          </ListItem>
          <ListItem>
            Gained hands-on experience with Vue2, Vue3, and React for building responsive user interfaces.
          </ListItem>
          <ListItem>
            Collaborated on projects utilizing MySQL for database management, enhancing understanding of full- stack
            development.
          </ListItem>
        </div>
      </div>
    ),
  },
  {
    title: "Sep 2023 - Apr 2023",
    content: (
      <div>
        <img
          src="https://media.licdn.com/dms/image/v2/C4D0BAQFz18vqLG0cqA/company-logo_200_200/company-logo_200_200/0/1631349927484?e=1738195200&v=beta&t=SYXN8FBp-8iHpYQbNnqTuRwM5-QKJgajNl9fDL3Yp8U"
          alt=""
          className="h-40 w-40 rounded-xl mb-5"
        />
        <h1 className="text-4xl font-bold mb-2">Binary Numbers</h1>
        <p className="text-xl font-bold text-gray-700">Junior Full Stack Developer</p>
        <div className="mt-4 md:w-3/4 pr-5 flex flex-col gap-2">
          <ListItem>
            Contributed to multiple projects, focusing on API development, frontend development, and building complex
            features with guidance from senior developers.
          </ListItem>
          <ListItem>
            Designed and implemented database schemas and managed relationships using best practices ensuring optimal
            data integrity and retrieval.
          </ListItem>
          <ListItem>
            Collaborated in a team environment, enhancing the functionality and performance of various projects.
          </ListItem>
          <ListItem>
            Gained a comprehensive understanding of project workflows and effectively translated requirements into
            actionable outcomes.
          </ListItem>
        </div>
      </div>
    ),
  },
  {
    title: "May 2024 - Sep 2024",
    content: (
      <div>
        <h1 className="text-4xl font-bold mb-2">Simple Digital Technology</h1>
        <p className="text-xl font-bold text-gray-700">Junior Full Stack Developer</p>
        <div className="mt-4 md:w-3/4 pr-5 flex flex-col gap-2">
          <ListItem>
            Developed features with increased autonomy, ensuring alignment with project specifications and client
            requirements.
          </ListItem>
          <ListItem>
            Independently designed and implemented features, engaging senior support only for complex issues requiring
            broader considerations.
          </ListItem>
          <ListItem>
            Mentored new team members by guiding them through processes and delegating smaller tasks, fostering a
            collaborative and supportive environment.
          </ListItem>
          <ListItem>
            Conducted regular code reviews to uphold best practices and improve code quality, fostering continuous
            learning within the team.
          </ListItem>
          <ListItem>
            Collaborated closely with cross-functional teams to gather feedback and iterate on features, ensuring
            alignment with project goals and user expectations.
          </ListItem>
        </div>
      </div>
    ),
  },
];

const WorkExperience = () => {
  return (
    <div className="flex justify-center pb-32">
      <div className="w-full max-w-7xl">
        <h1 className="text-6xl font-bold text-center">Work Experience</h1>
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default WorkExperience;
