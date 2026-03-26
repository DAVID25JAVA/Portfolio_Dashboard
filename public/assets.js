import {
  BookUser,
  Dribbble,
  FolderCode,
  FolderOpenDot,
  LayoutDashboard,
} from "lucide-react";
import {
  BriefcaseBusiness,
  ClipboardCheck,
  Code,
  Lightbulb,
} from "lucide-react";
import { File, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const sidebarLinks = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
  { name: "Add Projects", path: "/add-projects", icon: <FolderOpenDot /> },
  { name: "Social Media", path: "/social-media", icon: <Dribbble /> },
  { name: "Add Skills", path: "/add-skills", icon: <FolderCode /> },
  { name: "About", path: "/about", icon: <BookUser /> },
];

export const stats = [
  {
    label: "Years Experience",
    value: "3+",
    icon: <BriefcaseBusiness size={15} />,
    bg: "bg-blue-50",
    border: "border-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Total Projects",
    value: "24",
    icon: <ClipboardCheck size={15} />,
    bg: "bg-green-50",
    border: "border-green-100",
    color: "text-green-600",
  },
  {
    label: "Technologies",
    value: "18",
    icon: <Code size={15} />,
    bg: "bg-orange-50",
    border: "border-orange-100",
    color: "text-orange-500",
  },
  {
    label: "Total Skills",
    value: "12",
    icon: <Lightbulb size={15} />,
    bg: "bg-purple-50",
    border: "border-purple-100",
    color: "text-purple-500",
  },
];

export const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Language" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "MongoDB", level: 70, category: "Database" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    name: "shopify-clone",
    description:
      "A full-stack e-commerce app with cart, auth, and payment integration.",
    tech: ["Next.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Dashboard",
    name: "portfolio-dash",
    description:
      "Admin dashboard to manage portfolio projects, skills and social links.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Manager App",
    name: "taskify",
    description:
      "Drag-and-drop kanban board with real-time updates and team collaboration.",
    tech: ["TypeScript", "Socket.io", "PostgreSQL"],
    live: "#",
    github: "#",
  },
];

export const fields = [
  {
    key: "linkedIn",
    type: "text",
    label: "LinkedIn",
    placeholder: "https://linkedin.com/in/your-profile",
    hint: "Your LinkedIn profile URL",
    icon: <Linkedin size={15} />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    key: "github",
    type: "text",
    label: "GitHub",
    placeholder: "https://github.com/your-username",
    hint: "Your GitHub profile URL",
    icon: <Github size={15} />,
    color: "text-gray-800",
    bg: "bg-gray-100",
    border: "border-gray-200",
  },
  {
    key: "email",
    type: "email",
    label: "Email",
    placeholder: "you@example.com",
    hint: "Your professional email address",
    icon: <Mail size={15} />,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    key: "number",
    type: "number",
    label: "Phone Number",
    placeholder: "+91 98765 43210",
    hint: "Your contact number",
    icon: <Phone size={15} />,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    key: "resume",
    type: "text",
    label: "Resume Link",
    placeholder: "https://drive.google.com/your-resume",
    hint: "Google Drive, Notion, or any public URL",
    icon: <File size={15} />,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    key: "address",
    type: "text",
    label: "Address",
    placeholder: "e.g. New Delhi, India",
    hint: "City, Country or full address",
    icon: <MapPin size={15} />,
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];
