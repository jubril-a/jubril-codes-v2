'use client'

import { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  const [isVisible, setVisible] = useState(false)

  return (
    <div className="fixed z-999 w-full sm:pt-2 sm:px-4">
        <nav className="bg-[#080808d2] backdrop-blur-sm px-10 max-[480px]:px-5 py-4 flex items-center flex-wrap justify-between max-w-7xl mx-auto sm:rounded-[8px] text-[14px] text-white">
            <span className="text-xl font-extralight"><span className="font-bold text-primary">Jubril</span>.codes</span>
            <div className={"md:flex gap-4 items-center " + `${isVisible ? "grid order-1 w-full mt-16 gap-14 py-6 text-center" : "hidden"}`}>
                <a href="#about" className="opacity-70 hover:opacity-100">AboutMe</a>
                <a href="#projects" className="opacity-70 hover:opacity-100">Projects</a>
                <a href="#stack" className="opacity-70 hover:opacity-100">TechStack</a>
                <a href="#contact" className="opacity-70 hover:opacity-100">ContactMe</a>
                <a href="https://github.com/jubril-a" className="invert-100 opacity-70 hover:opacity-100 md:ml-4">
                  <Image src="/github.png" alt="" width={22} height={22} />
                </a>
            </div>
            <button onClick={() => setVisible(!isVisible)} className="group md:hidden p-2 bg-[#1F1F1F] hover:bg-[#1b1b1b] rounded-[8px]">
              <Image className="invert-70 group-hover:invert-100" src={isVisible ? "/close.png" : "/menu-bar.png"} alt="" width={22} height={22} />
            </button>
        </nav>
    </div>
  )
}

export default Navbar