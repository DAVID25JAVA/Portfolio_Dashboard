'use client'
import React from 'react'
import { useTheme } from '@/context/themeContext'

function page() {
  const { theme } = useTheme();

  return (
    <div className={`w-full ${theme=="light"?"bg-white":"bg-gray-950 "}`}>page</div>
  )
}

export default page