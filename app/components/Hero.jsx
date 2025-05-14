import Image from 'next/image'
import LinkButton from './LinkButton'
import pattern from '../../public/pattern.jpg'

const Hero = () => {
  return (
    <header className='relative bg-background text-white h-svh min-h-[480px] overflow-hidden px-4 grid justify-center items-center text-center'>
      <div className='absolute z-9 inset-0 bg-radial-[at_50%_0%] from-background to-[#0000] to-90%'></div>
      <div className='absolute inset-0 mix-blend-luminosity radial-mask bg-size-[1400px] bg-center opacity-24 bg-no-repeat' style={{backgroundImage: `url(/pattern.jpg)`}}></div>
      <div className='relative z-10'>
          <h1 className='text-4xl md:text-5xl max-w-2xl'>
              <span className='font-extralight'>Hello, I&apos;m </span>
              <span className='font-bold text-primary leading-[125%]'>Jubril<br />Abdulsalam.</span>
          </h1>
          <p className='pt-3 pb-4 opacity-60 text-[20px] md:text-[26px]'>I'm a frontend web developer.</p>
          <div className='flex gap-4 w-fit mx-auto'>
              <LinkButton label="Message Me" href="#contact" />
              <LinkButton label="Download CV" href="/jubril_cv.pdf" />
          </div>
      </div>
    </header>
  )
}

export default Hero