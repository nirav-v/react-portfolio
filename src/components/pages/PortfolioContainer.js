import Project from "../Project";
import adoptOwnerImage from "../../images/adopt-an-owner.png";
import golfapediaImage from "../../images/golfapedia.png";
import secureRandoImage from "../../images/secure-rando.png";
import bowelMvmtImage from "../../images/bowel-mvmt.jpg";
import { Grid} from "@mui/material";
// import { Item} from "@mui/material";



const projects = {
  toiletTracker: {
    title: "The-Bowel-Mvmt",
    description: "Crowdsourcing the most transparent and up to date public restroom information. MERN stack application built with React, Apollo server, GraphQL, and MongoDB",
    deployedLink: "https://the-bowel-mvmt.herokuapp.com/",
    github: "https://github.com/nirav-v/the-bowel-mvmt",
  },
  adoptOwner: {
    title: "Adopt-an-Owner",
    description: "Switching the roles of the pet adoption market by allowing adoption agencies to find new owners through their online profile. User data stored and quered using MySQL and sequelize",
    deployedLink: "https://radiant-wave-08847.herokuapp.com/",
    github: "https://github.com/nirav-v/adopt-an-owner",
  },
  golfapedia: {
    title: "Golfapedia",
    description:
      "Displaying local weather and nearby golf courses when users search a city. Data obtained from Google Maps API and Open Weather API",
      deployedLink: "https://nirav-v.github.io/golfapedia/",
    github: "https://github.com/nirav-v/golfapedia",
  },
  secureRando: {
    title: "Secure Rando",
    description:
      "generate a random password based on the criteria the user gets prompted to select",
      deployedLink: "https://nirav-v.github.io/secure-rando/",
    github: "https://nirav-v.github.io/secure-rando/",
  },
};

function Portfolio() {
  return (
    <div className="projects container d-flex p-4">

<Grid container spacing={2}>
  <Grid item xs={12} sm={6} >
     <Project
            title={projects.toiletTracker.title}
            imageSrc={bowelMvmtImage}
            description={projects.toiletTracker.description}
            deployedLink={projects.toiletTracker.deployedLink}
            github={projects.toiletTracker.github}
          />
  </Grid>
  <Grid item xs={12} sm={6} >
     <Project
            title={projects.adoptOwner.title}
            imageSrc={adoptOwnerImage}
            description={projects.adoptOwner.description}
            deployedLink={projects.adoptOwner.deployedLink}
            github={projects.adoptOwner.github}
          />
  </Grid>
  <Grid item xs={12} sm={6} >
   <Project
            title={projects.golfapedia.title}
            imageSrc={golfapediaImage}
            description={projects.golfapedia.description}
            deployedLink={projects.golfapedia.deployedLink}
            github={projects.golfapedia.github}
          />
  </Grid>
  <Grid item xs={12} sm={6} >
          <Project
            title={projects.secureRando.title}
            imageSrc={secureRandoImage}
            description={projects.secureRando.description}
            deployedLink={projects.secureRando.deployedLink}
            github={projects.secureRando.github}
          />
  </Grid>
</Grid>

     
    </div>
  );
}

export default Portfolio;
