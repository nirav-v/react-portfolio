function Project({title, link, description}) {
    const styles = {
     card: {
         width: '18rem',
         padding: 15,
         marginTop: 20
     }
    }
  return (
    
      <div className="card" style={styles.card}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#github" className="btn btn-primary">
            Github
          </a>
        </div>
      </div>
   
  );
}

export default Project;
