import Image from "next/image"

const SkillBox = ({lang, imgs, description}) => {
  return (
    <div className="border-1 border-[#ffffff13] p-2 rounded-2xl">
        <div className="bg-linear-to-t from-[#090909] to-[#212121] pt-10 px-6 pb-6 rounded-2xl">
            <div className="flex mb-8">
              {imgs.map((img) => <Image key={img} className="[&:not(:first-child)]:relative [&:nth-child(2)]:right-3.5 [&:nth-child(3)]:right-7 h-10 w-auto" src={img} width={40} height={40} alt="" />)}
            </div>
            <div>
                <h3 className="text-white mb-2 font-semibold">{lang}</h3>
                <p className="text-[#ffffffbe] text-sm">{description}</p>
            </div>
        </div>
    </div>
  )
}

export default SkillBox