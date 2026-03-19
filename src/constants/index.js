import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Laravel Framework",
    icon: mobile,
  },
  {
    title: "Linux | kali",
    icon: backend,
  },
  {
    title: "Networking",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
 {
  title: "Teaching Assistant – Programming & Computer Networks",
  company_name: "University",
  icon: starbucks,
  iconBg: "#383E56",
  date: "Aug 2024 – Jun 2026",
  points: [
    "Assisted in teaching Algorithms and Programming (2024), Computer Networks (2025), and Software Engineering (2026).",
    "Teaching basic programming logic using JavaScript with conditional statements and loops.",
    "Providing hands-on practice in computer networking using Mikrotik (LAN design, IP addressing, configuration).",
    "Guiding students in developing web applications using Laravel 12, MySQL, and Bootstrap.",
  ],
},
{
  title: "Laravel 12 Developer",
  company_name: "Gereja Pibi Amanat Agung Yogyakarta",
  icon: tesla,
  iconBg: "#E6DEDD",
  date: "March 2026 – Present",
  points: [
    "Developing a web-based application using Laravel 12 with MySQL database integration.",
    "Implementing CRUD functionality for managing data (create, read, update, delete).",
    "Designing and building frontend and backend features using Blade and Bootstrap.",
    "Collaborating with a small development team and stakeholders to improve system functionality.",
    "Assisting in testing and refining features based on user feedback.",
  ],
},
{
  title: "Internship | Web Developer",
  company_name: "PT Nansa Training",
  icon: shopify,
  iconBg: "#383E56",
  date: "Jan 2026 – Present",
  points: [
    "Converting and redeveloping a POS (Point of Sale) application from CodeIgniter to Laravel 12.",
    "Implementing role-based access control (Admin and Cashier).",
    "Developing backend features including transactions, product management, and reporting.",
    "Building CRUD functionality for system data management.",
    "Using MySQL and jQuery for database and frontend interactivity.",
    "Customizing StartUI admin template for system interface.",
  ],
},
{
    title: "Leader – Computer Network Club",
company_name: "Student Organization",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2025 - Present",
   points: [
  "Led a student organization focused on computer networking with 30 active participants.",
  "Conducted training sessions on basic networking concepts including LAN design and IP addressing.",
  "Taught hands-on configuration of Mikrotik devices, including hotspot setup with username and password authentication.",
  "Organized practical exercises and evaluations to assess participants' understanding.",
  "Developed leadership, communication, and mentoring skills through guiding team members.",
],
  },
];

const testimonials = [
  {
    testimonial:
      "--",
    name: "You",
    designation: "--",
    company: "--",
    image: "",
  },
  {
    testimonial:
      "--",
    name: "You",
    designation: "--",
    company: "--",
    image: "",
  },
  {
    testimonial:
      "--",
    name: "You",
    designation: "--",
    company: "--",
    image: "",
  },
];

const projects = [
  {
    name: "Website Gpibi (2025)",
    description:
      "Creating a full stack Laravel 10 application that provides an attractive interface in a church in Yogyakarta",
    tags: [
      {
        name: "Bootstrap 5",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Laravel 10 ",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/efraim20005",
  },
  {
    name: "Apllication Scan Presensi By Qr-code Controller",
    description:
      "Create a presence application for each class, which prioritizes speed and accuracy.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/efraim20005",
  },
  {
    name: "room reservation",
    description:
      "Creating a room reservation application in the Faculty of Physics and Computers, which aims to facilitate access and information per class.",
    tags: [
      {
        name: "Filament",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/efraim20005",
  },
];

export { services, technologies, experiences, testimonials, projects };
