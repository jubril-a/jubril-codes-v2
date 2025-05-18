import Section from "../components/Section"

const About = () => {
  return (
    <Section id="about">
        <h2>ABOUT ME_</h2>
        <div className="flex max-[960px]:flex-col gap-8 w-fit mx-auto my-20 items-start lg:items-center">
          <div className="w-full max-w-[300px] min-[960px]:w-[360px] aspect-[1/1] overflow-hidden rounded-xl bg-white bg-[url(/jubril.jpg)] bg-cover bg-center">
          </div>
          <div className="max-w-[640px]">
            <p className="text-[#ffffffbe] px-1 mb-4">I&apos;m a frontend developer with a background in design and over two years of experience building dynamic, user-friendly websites and applications. I&apos;m proficient in React and Next.js, and I&apos;m passionate about performance optimization and writing clean, maintainable code.</p>
            <p className="text-[#ffffffbe] px-1">Currently, I work as a frontend developer at Gatech Integrated Services, where I build and maintain websites for the company and its clients. I&apos;m also part of the academy team, teaching web development and helping others break into tech.</p>
            <div className="my-3 border-t-1 border-dotted border-[#ffffff33] max-w-3xl mx-auto"></div>
            <p className="text-[#ffffff79] px-1">Have a project you&apos;d like to discuss? <a className="text-[#ffffffda] hover:text-white hover:underline" href="#message">Send me a Message</a></p>
          </div>
        </div>
    </Section>
  )
}

export default About