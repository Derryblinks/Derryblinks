import React from 'react'
import './Skills.css';
import UIdesign from '../../assets/UX.jpg';
import Mobile from '../../assets/mobile.jpg';
import Website from '../../assets/website.jpg';
import Graphics from '../../assets/Graphics.jpg'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience and I specialize in crafting dynamic and user-friendly mobile apps that seamlessly blend creativity with functionality </span>
        <div className="skillBars">
            <div className='skillBar'>
                <img src={UIdesign} alt='UI Design' className='skillBarimg' />
                 <div className='skillBarText'>
                    <h2> UI/UX Design</h2>
                    <p>Expert in crafting visually appealing and intuitive digital experiences.  my work aims to strike the perfect balance between aesthetics and functionality.</p>
                 </div>
            </div>
            {/* this is a comment for the second div */}
            <div className='skillBar'>
                <img src={Website} alt='Web design' className='skillBarimg' />
                 <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p> With a focus on responsive design, I create websites that adapt to various devices for optimal user interactions. I show Commitment to the latest design trends and technologies.</p>
                 </div>
            </div>
            {/*this is the third comment for the third div*/}
            <div className='skillBar'>
                <img src={Mobile} alt='Mobile app design' className='skillBarimg' />
                 <div className='skillBarText'>
                    <h2>Mobile App Development</h2>
                    <p> From sleek and intuitive interfaces to robust backend development, I cover all aspects of the mobile app development process.  I turn concepts into innovative and user-friendly applications.</p>
                 </div>
            </div>

             {/*this is the fourth comment for the fourth div*/}
             <div className='skillBar'>
                <img src={Graphics} alt='Mobile app design' className='skillBarimg' />
                 <div className='skillBarText'>
                    <h2>Graphic Designing</h2>
                    <p> From sleek and intuitive interfaces to robust backend development, I cover all aspects of the mobile app development process.  I turn concepts into innovative and user-friendly applications.</p>
                 </div>
            </div>

        </div>
    </section>
  )
}

export default Skills