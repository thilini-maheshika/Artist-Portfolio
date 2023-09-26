import React from 'react';
import './intro.css';
import background_intro from '../../assets/img/aw.png';
import { Link } from 'react-scroll';
import get_hire from '../../assets/img/hire.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Welcome !!<br/></span><span className='introtext'>This is <span className='introName'>Alan Walker</span>'s <br/> Musical World<br/></span>
            <span className='intropara'>Where emotions and melodies intertwine to create a unique sonic journey</span>
            <Link><button className='btnhire'><img className='btnImg' src={get_hire} alt='hire'/>Hire Me</button></Link>
        </div>
        <img className='background_intro' src={background_intro} alt=''>
        </img>
    </section>
  )
}

export default Intro;
