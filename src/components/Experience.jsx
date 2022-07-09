import React from 'react';
import html from "../photo/HTML.png";
import css from "../photo/CSS.png";
import javascript from "../photo/JavaScript.png";
import react from "../photo/React.webp";
import tailwind from '../photo/Tailwind.png'
import github from '../photo/Github.png'

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title:"HTML",
      style:" shadow-orange-500 "
    },
    {
      id: 2,
      src:css,
      title:"CSS",
      style:" shadow-blue-500 "
    },
     {
      id: 3,
      src:javascript,
      title:"JavaScript",
      style:" shadow-yellow-500 "
    },
     {
      id: 4,
      src:react,
      title:"React.JS",
      style:" shadow-blue-600 "
    },
     {
      id: 5,
      src:tailwind,
      title:"Tailwind",
      style:" shadow-sky-400"
    },
    {
      id: 6,
      src:github,
      title:"Github",
      style:" shadow-black "
    }
  ]
  return (
    <div name="experience" className=' h-screen w-full bg-gradient-to-b from-gray-700 to-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full p-4
         text-white '>
          
<div>
<p className=' text-4xl font-bold border-b-4 border-yellow-600 p-2 inline'>Experience</p>
<p className=' py-6 text-2xl'>There are the technologies. I've worked with</p>
</div>
  <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
{techs.map(({id, src, title, style}) => (
  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
<img src={src} alt="" className='w-20 mx-auto' />
<p className='mt-4'>{title}</p>
  </div>
  ))}
</div>

        </div>

    </div>
  )
}

export default Experience