import '../styles/ProjectCard.css'

function Project({ title, imageSrc, imageAlt, deployedLink, github, description }) {
  const styles = {
    card: {
      width: "18rem",
      padding: 20,
      marginTop: 60,
      color: "black",
      fontFamily: 'Times New Roman, serif',
      backgroundColor: 'teal',
      
    }
  };
  return (
    <div className="card" style={styles.card}>
        <img src = {imageSrc}
        className="card-img-top" alt={imageAlt}/>
      <div className="card-body">
        <a className="project-link" href={deployedLink}><h5 className="card-title">{title}</h5></a>
        <p className="card-text">{description}</p>
        <a className='github-link' href={github} >
          See Github Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
