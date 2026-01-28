import {
  Dribbble,
  FolderCode,
  FolderOpenDot,
  LayoutDashboard,
} from "lucide-react";

export const sidebarLinks = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
  { name: "Add Projects", path: "/add-projects", icon: <FolderOpenDot /> },
  { name: "Social Media", path: "/social-media", icon: <Dribbble /> },
  { name: "Add Skills", path: "/add-skills", icon: <FolderCode /> },
];
