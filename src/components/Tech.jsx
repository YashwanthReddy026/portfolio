import { SectionWrapper } from "../utils";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <button 
            className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-2 rounded-full flex items-center transform transition duration-300 hover:scale-125'>
            <img src={technology.icon} alt={technology.name} className="w-16 h-16" />
          </button>
        </div>
      ))}
    </div>
  );
};  

export default SectionWrapper(Tech, "");

