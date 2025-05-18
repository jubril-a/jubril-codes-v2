import Image from "next/image"

const ProjectCard = ({liveUrl, repoUrl, imgUrl, videoUrl, heading, industry}) => {
  return (
    <div className="relative group p-4 rounded-[8px] bg-[#ffffff10] hover:bg-[#ffffff13] border-1 border-transparent hover:border-[#ffffff20]">
        <a href={liveUrl} className="absolute inset-0"></a>
        <div>
            <Image className="w-full" src={imgUrl} alt="" width="640" height="401"/>
        </div>
        <div className="mt-4 flex justify-between gap-4">
          <div>
            <h3 className="text-white group-hover:text-[#F4EA2C] text-sm mb-1 font-medium">{heading}</h3>
            <p className="text-xs text-[#ffffff7a] group-hover:text-[#F4EA2C]">{industry}</p>
          </div>
          <div className="flex gap-4">
            <a href={liveUrl}><Image className="invert-60 hover:invert-100" src="/arrow.png" width={18} height={18} alt="" /></a>
            <a href={repoUrl}><Image className="invert-60 hover:invert-100" src="/github.png" width={18} height={18} alt="" /></a>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard