import Image from "next/image"
import Section from "../components/Section"

const Experience = () => {
  return (
    <Section>
        <h2>EXPERIENCE_</h2>
        <div className="grid min-[860px]:grid-cols-3 max-w-[1200px] mx-auto my-20 bg-[#121212] rounded-2xl">
            <div className="text-white p-10">
                <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Image className="mb-3" src={"/gatech-logo.png"} width={100} height={33} alt="" />
                <span className="text-sm text-[#ffffffbe]">Frontend Developer & Tutor</span>
            </div>
            <div className="text-white p-10 max-[860px]:border-y min-[860px]:border-x border-[#ffffff1f]">
                <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Image className="mb-3" src={"/gatech-logo.png"} width={100} height={33} alt="" />
                <span className="text-sm text-[#ffffffbe]">Graphic Designer</span>
            </div>
            <div className="text-white p-10">
                <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Image className="mb-3" src={"/wiki-logo.png"} width={113} height={33} alt="" />
                <span className="text-sm text-[#ffffffbe]">Graphic Designer</span>
            </div>
        </div>
        
        {/* <div className="border-t-1 border-dotted border-[#ffffff33] max-w-3xl mx-auto"></div>
        <p className="center text-[#ffffff79] text-center mt-6">I&apos;m also quick to learn and adapt to new technologies</p> */}
    </Section>
  )
}

export default Experience