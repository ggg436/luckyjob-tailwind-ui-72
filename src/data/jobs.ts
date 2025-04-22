export interface Job {
  id: number;
  date: string;
  company: string;
  title: string;
  logo: string;
  skills: string[];
  salary: string;
  location: string;
  color: string;
  logoColor: string;
  badge?: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    date: "19 Feb, 2023",
    company: "Google",
    title: "Senior Data Scientist",
    logo: "google",
    skills: ["Data Analysis", "Machine Learning", "R", "Python", "Statistics"],
    salary: "$290/hr",
    location: "California, CA",
    color: "bg-blue-50",
    logoColor: "text-blue-500"
  },
  {
    id: 2,
    date: "12 May, 2023",
    company: "Microsoft",
    title: "Software Engineer",
    logo: "microsoft",
    skills: ["Programming", "Software Development", "Java", "C++", "Web Development"],
    salary: "$176/hr",
    location: "Redmond, WA",
    color: "bg-pink-50",
    logoColor: "text-pink-500"
  },
  {
    id: 3,
    date: "29 May, 2023",
    company: "Amazon Web Services (AWS)",
    title: "Middle DevOps Engineer",
    logo: "aws",
    skills: ["Cloud Computing", "CI/CD", "Full Dev", "Automation", "Linux", "Docker"],
    salary: "$190/hr",
    location: "Seattle, WA",
    color: "bg-orange-50",
    logoColor: "text-orange-500",
    badge: "80%"
  },
  {
    id: 4,
    date: "11 May, 2023",
    company: "IBM",
    title: "Cybersecurity Analyst",
    logo: "ibm",
    skills: ["Information Security", "Incident", "Network Security", "Penetration Testing"],
    salary: "$140/hr",
    location: "Armonk, NY",
    color: "bg-gray-50",
    logoColor: "text-gray-500"
  },
  {
    id: 5,
    date: "14 Apr, 2023",
    company: "Salesforce",
    title: "Senior Cloud Solutions Architect",
    logo: "salesforce",
    skills: ["Cloud Computing", "AWS", "Azure", "Google Cloud", "Infrastructure Design"],
    salary: "$220/hr",
    location: "San Francisco, CA",
    color: "bg-sky-50",
    logoColor: "text-sky-500"
  },
  {
    id: 6,
    date: "18 Jan, 2023",
    company: "Facebook",
    title: "Senior Full Stack Developer",
    logo: "facebook",
    skills: ["Web Development", "Frontend", "Backend", "JavaScript", "Database"],
    salary: "$110/hr",
    location: "Menlo Park, CA",
    color: "bg-indigo-50",
    logoColor: "text-indigo-500"
  }
];
