import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-background p-4 border-t-1 border-dotted border-[#ffffff33]">
        <div className="flex justify-between items-center flex-wrap gap-4 text-gray-200 text-sm max-w-[1200px] mx-auto py-10 tracking-wide">
            <p><a href="https://www.figma.com/design/GugDRolANJL22PXOMucUnG/Portfolio?node-id=0-1&t=hMAElvvPTJghRV45-1" className="hover:opacity-60">designed in figma</a> by yours truly.</p>
            <div className="flex gap-4">
                <a href="https://github.com/jubril-a"><Image className="invert-60 hover:invert-100" src="/github.png" width={18} height={18} alt="" /></a>
                <a href="https://www.linkedin.com/in/abdulsalamjubr3/"><Image className="invert-60 hover:invert-100" src="/linkedin.png" width={18} height={18} alt="" /></a>
                <a href="https://www.instagram.com/jubrilabdul_/"><Image className="invert-60 hover:invert-100" src="/instagram.png" width={18} height={18} alt="" /></a>
                <a href="https://x.com/jubrilabdul001"><Image className="invert-60 hover:invert-100" src="/twitter.png" width={18} height={18} alt="" /></a>
            </div>
            <a href="https://github.com/jubril-a/jubril-codes-v2" className="flex gap-2 hover:opacity-60">
              <Image src="/icons/love.png" width={20} height={20} alt="" />
              <p>Made with passion and Next.js.</p>
            </a>
        </div>
    </footer>
  )
}

export default Footer