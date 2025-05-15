import Image from "next/image"

const ProjectCard = ({imgUrl, videoUrl, heading, industry}) => {
  return (
    <div className="group p-4 rounded-[8px] bg-[#ffffff10] hover:bg-[#ffffff13] cursor-pointer border-1 border-transparent hover:border-[#ffffff20]">
        <div>
            <Image className="w-full" src={imgUrl} alt="" width="640" height="401"/>
        </div>
        <div className="mt-4">
            <h3 className="text-white group-hover:text-[#F4EA2C] text-sm mb-1 font-medium">{heading}</h3>
            <p className="text-xs text-[#ffffff7a] group-hover:text-[#F4EA2C]">{industry}</p>
        </div>
    </div>
  )
}

export default ProjectCard