import profilePic from '../../images/profile-pic.jpg'

const styles = {
    bio: {
        backgroundColor: "blue"
    },
    headshot: {
        borderRadius: 100,
    }

}

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img src= {profilePic} alt={"profile headshot"} style={styles.headshot}/>
      <section>
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
