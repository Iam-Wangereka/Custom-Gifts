import './Header.css'
import './Body.css'
import './About.css'
import about from '../images/about.jpg'

const About = () =>{
    return(
        <>
<div className="about">
<div className="section">
    <img src={about} alt='about' />
      <div className="about-text">
    <h1>About Us</h1>
    <h5>Desiner & Creator</h5>
    <p>We make ideas real by working on customers' thoughts through
      concept development, design and finally creating the actual product.</p>
  </div>
</div>
</div>
        </>
    )
}

export default About;