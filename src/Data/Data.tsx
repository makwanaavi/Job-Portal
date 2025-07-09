import {
  IconBriefcase,
  IconMapPin,
  IconRecharging,
  IconSearch,
} from "@tabler/icons-react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const companies = [
  "Google",
  "Amazon",
  "Figma",
  "Meta",
  "Microsoft",
  "Netflix",
  "Oracle",
  "Pinterest",
  "Slack",
  "Spotify",
  "Walmart",
];

export const jobCategories = [
  {
    id: 1,
    title: "UI-UX Designer",
    icon: "/Category/UI-UX Designer.png",
    description: "Design user interfaces and enhance user experience",
    jobs: "800+ new job posted",
  },
  {
    id: 2,
    title: "Content Writing",
    icon: "/Category/Content Writing.png",
    description: "Write and edit content for various platforms",
    jobs: "500+ new job posted",
  },
  {
    id: 3,
    title: "Data Entry",
    icon: "/Category/Data Entry.png",
    description: "Input data into systems accurately and efficiently",
    jobs: "80K+ new job posted",
  },
  {
    id: 4,
    title: "Customer Support",
    icon: "/Category/Customer Support.png",
    description: "Assist customers with inquiries and issues",
    jobs: "1.2K+ new job posted",
  },
  {
    id: 5,
    title: "Sales",
    icon: "/Category/Sales.png",
    description: "Sell products and services to customers",
    jobs: "10K+ new job posted",
  },
  {
    id: 6,
    title: "Finance",
    icon: "/Category/Finance.png",
    description: "Manage financial records and transactions",
    jobs: "700+ new job posted",
  },
  {
    id: 7,
    title: "Human Resource",
    icon: "/Category/Human Resource.png",
    description: "Recruit, manage, and support company employees",
    jobs: "70K+ new job posted",
  },
  {
    id: 8,
    title: "Digital Marketing",
    icon: "/Category/Digital Marketing.png",
    description: "Promote brands online with marketing strategies",
    jobs: "70K+ new job posted",
  },
  {
    id: 9,
    title: "Web Developer",
    icon: "/Category/Web Developer.png",
    description: "Build and maintain websites for clients",
    jobs: "70K+ new job posted",
  },
  {
    id: 10,
    title: "Arts & Design",
    icon: "/Category/Arts & Design.png",
    description: "Create visual content for branding and media",
    jobs: "700+ new job posted",
  },
];

// Data.jsx

export const testimonials = [
  {
    name: "Shivam Patel",
    avatar: "avatar-9.png",
    rating: 2.5,
    message:
      "This job portal made job search easy and quick. Recommended to all job seekers!",
  },
  {
    name: "Anjali Mehta",
    avatar: "avatar-8.png",
    rating: 4.5,
    message: "User-friendly interface and great job recommendations!",
  },
  {
    name: "Rahul Sharma",
    avatar: "avatar-7.png",
    rating: 5,
    message: "Found my dream job within a week. Thanks to this platform!",
  },
  {
    name: "Priya Verma",
    avatar: "avatar-8.png",
    rating: 4,
    message: "Highly efficient and easy to use. Will recommend to friends.",
  },
];

export const FooterLinks = [
  { title: "Products", links: ["Find Job", "Find Company", "Find Employee"] },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"],
  },
  { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] },
];

  export const dropdwonData = [
  {
    title: "Job title",
    icon: IconSearch,
    option: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specilist",
      "Data Anaylct",
      "Sales Excutive",
      "Conetecct writter",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    option: [
      "Delhi",
      "New York",
      "San Francion",
      "London",
      "Berlin",
      "Tokyo",
      "Syden",
      "Toranto",
    ],
  },
  {
    title: "Experiance",
    icon: IconBriefcase,
    option: ["Entery Level", "InterMediate", "Expert"],
  },
  {
    title: "Job Type",
    icon: IconRecharging,
    option: ["Full Time", "Part Time", "Contract", "Freelance", "Intership"],
  },
];



export const JobList = [
  {
    jobtitle: "UI/UX Designer",
    company: "Amazon",
    Applicants: 42,
    experiance: "Mid Level",
    jobtype: "Full Time",
    location: "San Francisco",
    pacage: "28LPA",
    PostedDayago: 4,
    decription:
      "Amazon is hiring a creative UI/UX Designer to shape seamless user experiences across web and mobile.",
  },
  {
    jobtitle: "Frontend Developer",
    company: "Google",
    Applicants: 35,
    experiance: "Entry Level",
    jobtype: "Full Time",
    location: "Bangalore",
    pacage: "22LPA",
    PostedDayago: 6,
    decription:
      "Google is seeking a Frontend Developer to build modern, accessible, and scalable user interfaces.",
  },
  {
    jobtitle: "Product Designer",
    company: "Meta",
    Applicants: 25,
    experiance: "Entry Level",
    jobtype: "Full Time",
    location: "New York",
    pacage: "32LPA",
    PostedDayago: 12,
    decription:
      "Meta is seeking a Product Designer to join a fast-moving design team focused on innovation.",
  },
  {
    jobtitle: "Backend Developer",
    company: "Netflix",
    Applicants: 36,
    experiance: "Senior Level",
    jobtype: "Remote",
    location: "Los Angeles",
    pacage: "45LPA",
    PostedDayago: 7,
    decription:
      "Netflix is looking for a skilled Backend Developer to build scalable systems and microservices.",
  },
  {
    jobtitle: "UX Researcher",
    company: "LinkedIn",
    Applicants: 19,
    experiance: "Mid Level",
    jobtype: "Contract",
    location: "London",
    pacage: "30LPA",
    PostedDayago: 9,
    decription:
      "LinkedIn is hiring a UX Researcher to gather insights and shape product decisions through user testing.",
  },
  {
    jobtitle: "Product Designer",
    company: "Spotify",
    Applicants: 18,
    experiance: "Entry Level",
    jobtype: "Contract",
    location: "Berlin",
    pacage: "26LPA",
    PostedDayago: 2,
    decription:
      "Spotify is on the hunt for a fresh-thinking Product Designer to shape intuitive audio experiences.",
  },
  {
    jobtitle: "SMM Manager",
    company: "Apple",
    Applicants: 54,
    experiance: "Mid Level",
    jobtype: "Full Time",
    location: "Mumbai",
    pacage: "20LPA",
    PostedDayago: 10,
    decription:
      "Apple is hiring a Social Media Marketing Manager to lead campaigns across Instagram, Twitter & YouTube.",
  },
  {
    jobtitle: "UI/UX Designer",
    company: "Adobe",
    Applicants: 31,
    experiance: "Entry Level",
    jobtype: "Internship",
    location: "Bangalore",
    pacage: "6LPA",
    PostedDayago: 1,
    decription:
      "Adobe is seeking an enthusiastic UI/UX Design Intern to contribute to real-time product interface challenges.",
  },
  {
    jobtitle: "DevOps Engineer",
    company: "Microsoft",
    Applicants: 27,
    experiance: "Senior Level",
    jobtype: "Full Time",
    location: "Hyderabad",
    pacage: "38LPA",
    PostedDayago: 5,
    decription:
      "Microsoft is hiring a DevOps Engineer to manage CI/CD pipelines and cloud infrastructure on Azure.",
  },
];

