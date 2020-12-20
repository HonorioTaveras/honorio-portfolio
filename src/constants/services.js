import React from "react"
import { FaReact, FaDatabase, FaDev } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaReact className="service-icon" />,
    title: "frontend",
    text: `I love creating intuitive and modern UI's with JavaScript and frontend libraries/frameworks like React. I have experience with many of the tools used in the React ecosystem such as Hooks, dynamic API integration, authentication best practices, Redux state management, GraphQL for more streamline queries, React Router, Styled Components, and component/state structuring for the fastest and most efficient UI/UX achievable.`,
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "backend",
    text: `I am comfortable designing and architecting clean, maintainable, and scalable back-ends using express/node.js to support high level web traffic using relational or non-relational databases like PostgresQL, MySQL, or MongoDB. I have containerized with Docker and deployed applications with AWS.`,
  },
  {
    id: 3,
    icon: <FaDev className="service-icon" />,
    title: "best practices",
    text: `I have knowledge of professional software engineering practices & best practices for full software development life cycle, including coding standards, code reviews, source control management, test-driven development in order to ensure code integrity by using Jest and Enzyme or Mocha and Chai, continuous deployments, and agile methodologies`,
  },
]
