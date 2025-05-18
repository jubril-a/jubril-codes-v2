const Section = ({children, id}) => {
  return (
    <section id={id} className="py-20 lg:py-32 px-3 sm:px-8 bg-background">
        { children }
    </section>
  )
}

export default Section