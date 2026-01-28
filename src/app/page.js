'use client'
import { useTheme } from "@/context/themeContext";


export default function Home() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`w-full ${theme=="light"?"bg-white":"bg-gray-950 "}`}>
      
    </div>
  );
}
