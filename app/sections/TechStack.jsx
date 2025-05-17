import Section from "../components/Section"
import SkillBox from "../components/SkillBox"
import Grid from "../components/Grid"
import { stack } from "../data"

const TechStack = () => {
  return (
    <Section>
        <h2>TECH STACK_</h2>
        <Grid>
            {stack.map((tech) => <SkillBox key={tech.key} lang={tech.lang} imgs={tech.imgs} />)}
        </Grid>
        <div className="border-t-1 border-dotted border-[#ffffff33] max-w-3xl mx-auto"></div>
        <p className="center text-[#ffffff79] text-center mt-6">I&apos;m also quick to learn and adapt to new technologies</p>
    </Section>
  )
}

export default TechStack