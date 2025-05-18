import Section from "../components/Section"

const Contact = () => {
  return (
    <Section id="message">
        <h2>CONTACT ME_</h2>
        <form className="max-w-lg mx-auto my-20 grid gap-8" action="https://formspree.io/f/xdorjnlv"
  method="POST">
            <label htmlFor="name"><span className="text-gray-300 text-sm">Name</span><br />
                <input className="border text-white p-2 bg-[#121212] border-[#ffffff17] hover:border-[#ffffff33] focus:border-[#f4ea2ce1] outline-0 block mt-2 h-12 rounded-lg w-full" id="name" name="name" type="text" />
            </label>
            <label htmlFor="email"><span className="text-gray-300 text-sm">Email Address</span><br />
                <input className="border text-white p-2 bg-[#121212] border-[#ffffff17] hover:border-[#ffffff33] focus:border-[#f4ea2ce1] outline-0 block mt-2 h-12 rounded-lg w-full" id="name" name="email" type="email" />
            </label>
            <label htmlFor="message"><span className="text-gray-300 text-sm">Your Message</span><br />
                <textarea className="border text-white p-2 bg-[#121212] border-[#ffffff17] hover:border-[#ffffff33] focus:border-[#f4ea2ce1] outline-0 block mt-2 h-36 rounded-lg w-full" id="name" name="message"></textarea>
            </label>
            <input className="bg-primary text-background hover:opacity-60 cursor-pointer text-sm p-3 rounded-lg font-medium" type="submit" value="Send Message" />
        </form>
    </Section>
  )
}

export default Contact