import React from 'react'
import './intro.css';
import bg from '../../assets/man.png'
import bag from '../../assets/bag.png'



const Intro = () => {
  return (
    <section id="Intro">
      <div className='introContent'> 
      <span className='hello'>Hello</span>
      <span className='introText'>I'm <span className='introName'>Derryblinks</span><br/>Website Designer</span>
        <p className='introPara'>Derryblinks: Your go-to source for seamless website design and captivating graphics that bring your vision to life with style and precision.</p>
        <button className='btn'><img src={bag} alt='Job bag' className='btnImg'/>Hire Me</button>
      </div>
      <img src={bg} alt='Web Designer' className="bg" />
    </section>
  )
}

export default Intro