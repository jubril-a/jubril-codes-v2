import ProjectCard from "../components/ProjectCard"
import Grid from "../components/Grid"
import Section from "../components/Section"

import { projects } from '../data'

  const Showcase = () => {
  return (
    <Section>
        <h2>SHOWCASE_</h2>
        <Grid>
            { projects.map((project) =>
              (<ProjectCard key={project.key} heading={project.title} industry={project.industry} imgUrl={project.img} />)
            )}
        </Grid>
        <div className="border-t-1 border-dotted border-[#ffffff33] max-w-3xl mx-auto"></div>
        <p className="center text-[#ffffff79] text-center mt-6">Have a project you&apos;d like to discuss? <a className="text-[#ffffffda] hover:text-white" href="#message">Send me a Message</a></p>
    </Section>
  )
}

export default Showcase