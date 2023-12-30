import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/1.jpg';
import Portfolio2 from '../../assets/2.jpg';
import Portfolio3 from '../../assets/3.jpg';
import Portfolio4 from '../../assets/4.jpg';
import Portfolio5 from '../../assets/5.jpg';
import Portfolio6 from '../../assets/6.jpg';


const Works = () => {
  return (
    <section id='works'>
       <h2 className='workstitle'>My Portfolio</h2>
       <span className='worksDesc'> My portfolio reflects a diverse range of mobile applications, each designed to meet unique client objectives and user needs.Passionate about staying updated with the latest technologies to ensure cutting-edge and scalable mobile solutions.</span>
       <div className='worksImgs'>
        <img src={Portfolio1} alt="" className='worksImg' />
        <img src={Portfolio2} alt="" className='worksImg' />
        <img src={Portfolio3} alt="" className='worksImg' />
        <img src={Portfolio4} alt="" className='worksImg' />
        <img src={Portfolio5} alt="" className='worksImg' />
        <img src={Portfolio6} alt="" className='worksImg' />
       </div>
       <button className='workBtn'>See More</button>
    </section>
  )
}


export default Works