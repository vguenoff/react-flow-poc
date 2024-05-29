'use client'
import { useState } from 'react'

export default function SideMenu() {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => setToggle(!toggle)

  return (
    <div
      className={`absolute right-0 h-screen flex-col  bg-gray-400  p-8 ${toggle ? 'w-20' : 'w-80'} duration-300`}
    >
      <div className="relative flex items-center justify-between">
        <button className="absolute right-0 p-4" onClick={handleToggle}>
          |||
        </button>
      </div>

      <div
        className={`${toggle ? 'opacity-0' : 'opacity-100'} w-60 pt-8 duration-300`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        fugit eligendi ea magnam non magni beatae reiciendis eum, aspernatur
        porro aut? Delectus eligendi soluta architecto libero magni beatae?
        Nisi, ullam.
      </div>
    </div>
  )
}
