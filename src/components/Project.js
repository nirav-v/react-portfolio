import '../styles/ProjectCard.css'
import githubLogoImage from "../images/github-logo.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Project({ title, imageSrc, imageAlt, deployedLink, github, description })  {
  const styles = {
    card: {
      width: "18rem",
      padding: 20,
      marginTop: 60,
      color: "black",
      fontFamily: 'Times New Roman, serif',
      backgroundColor: '#c6e7f5'
      
    }
  };
  return (

 <Card sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        height="200"
        image={imageSrc}
        alt={imageAlt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={deployedLink} target={"_blank"}>Deployed App</Button>
        <Button size="small" href={github} target={"_blank"}><img className="github-img" src={githubLogoImage} alt="github logo"/></Button>
      </CardActions>
    </Card>

    // <div className="card" style={styles.card}>
    //     <img src = {imageSrc}
    //     className="card-img-top" alt={imageAlt}/>
    //   <div className="card-body">
    //     <a className="project-link" href={deployedLink}  target={"_blank"} rel={"noreferrer"}><h5 className="card-title">{title}</h5></a>
    //     <p className="card-text">{description}</p>
    //     <a className='github-link' href={github}  target={"_blank"} rel={"noreferrer"} >
    //       See Github Repository
    //     </a>
    //   </div>
    // </div>
  );
}

export default Project;
