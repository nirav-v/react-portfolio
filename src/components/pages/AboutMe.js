import profilePic from '../../images/profile-pic.jpg'

import '../../styles/AboutMe.css'

const styles = {
    headshot: {
        borderRadius: 100,
        opacity: 50
    }

}

function AboutMe() {
  return (
    <div className='about-me'>
      <h1>About Me</h1>
     
      <section className='profile'>
           <img  src= {profilePic} alt={"profile headshot"} style={styles.headshot}/>
        <p className="bio container-fluid" style={styles.bio}>
          I am a full stack web developer residing in San Diego, CA. I am
          fascinated by how the web works, and am passionate about ensuring the
          best possible user experience in every project that I am involved
          with. Outside of work, I enjoy the outdoors, animals, and
          skateboarding. I continue to weave these interests of mine into the
          projects I showcase in this portfolio.
        </p>
      </section>
      
    </div>
  );
}

export default AboutMe;
