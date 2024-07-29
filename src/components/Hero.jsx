import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yashwanth</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Welcome to my professional portfolio.
          </p> 
          <p>Here, you will find a comprehensive collection of my work showcasing my expertise 
          in mechanical design, simulation, and analysis. I have utilized industry-leading software such as SolidWorks, ANSYS, AutoCAD, 
          and MATLAB to deliver innovative solutions to complex engineering challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
