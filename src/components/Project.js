import '../styles/ProjectCard.css'
import githubLogoImage from "../images/github-logo.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Project({ title, imageSrc, imageAlt, deployedLink, github, description })  {

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

  );
}

export default Project;
