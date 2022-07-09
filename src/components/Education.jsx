import "./Education.css"
import React from 'react';
import {FaGraduationCap} from 'react-icons/fa';


const Education = () => {
  return (
//     <div classNameNameName=' h-screen w-full bg-gradient-to-b from-slate-800 to-white'>
// <h1 classNameName='text-center font-bold text-white text-3xl py-4 border-b-2'><span classNameName='text-yellow-700'>My</span> Education</h1>
//         <div classNameName='max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 text-black md:flex-row'>
//           <div classNameName="flex flex-wrap justify-between items-center">
//           <i classNameName="graduate">
//             <FaUserGraduate/>
//           </i>
//             <h3><span>Year: </span> 2015</h3>
//           </div>
//         </div>
//     </div>


<div className=' h-full w-full bg-gradient-to-b from-slate-800 to-white'>
<section className= " education" id="education">
<h1 className=" text-center font-bold text-yellow-700 text-3xl py-8 border-b-2">My<span className="text-black">Education</span></h1>
<div className="box-container">
  <div className="box">
    <i className="fas fa-graduation-cap"><FaGraduationCap/></i>
    <h3><span>Year :</span>2015</h3>
    <h3><span>Qualification :</span>Matric</h3>
    <h3><span>School :</span>D.N. High School</h3>
  </div>
  <div className="box">
    <i className=" text-center"><FaGraduationCap/></i>
    <h3><span>Year :</span>2018</h3>
    <h3><span>Qualification :</span>B.sc</h3>
    <h3><span>College :</span>K.R Bose smarak College Muzaffarpur</h3>
  </div>
  <div className="box">
    <i className="<FaGraduationCap/>"><FaGraduationCap/></i>
    <h3><span>Year :</span>2021</h3>
    <h3><span>Qualification :</span>B.C.A</h3>
    <h3><span>College :</span>R.D.S College Muzaffarpur</h3>
  </div>
</div>
</section>
</div>
  )
}

export default Education