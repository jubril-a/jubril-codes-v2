import Image from "next/image"
import Section from "../components/Section"

const Experience = () => {
  return (
    <Section id="experience">
        <h2>EXPERIENCE_</h2>
        <div className="grid min-[860px]:grid-cols-3 max-w-[1200px] mx-auto mt-15 sm:mt-20 bg-[#121212] rounded-2xl border border-[#ffffff1f]">
            <div className="text-white p-8 min-[520]:p-10">
                <p className="mb-10">Developed websites for the company and its clients, and taught web development at the company&apos;s academy.</p>
                <Image className="mb-3" src={"/gatech-logo.png"} width={100} height={33} alt="" />
                <span className="text-sm text-[#ffffffbe]">Frontend Developer & Tutor</span>
            </div>
            <div className="text-white p-8 min-[520]:p-10 max-[860px]:border-y min-[860px]:border-x border-[#ffffff1f]">
                <p className="mb-10">Designed flyers for print and social media, and created branded materials such as posters, business cards, and letterheads for company use.</p>
                <Image className="mb-3" src={"/gatech-logo.png"} width={100} height={33} alt="" />
                <span className="text-sm text-[#ffffffbe]">Graphic Designer</span>
            </div>
            <div className="text-white p-8 min-[520]:p-10">
                <p className="mb-10">Created flyers for marketing campaigns, designed engaging social media visuals, and contributed to the brand&apos;s visual identity across platforms.</p>
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