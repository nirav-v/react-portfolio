import Project from "../Project";
import adoptOwnerImage from "../../images/adopt-an-owner.png";
import golfapediaImage from "../../images/golfapedia.png";
import secureRandoImage from "../../images/secure-rando.png";
import bowelMvmtImage from "../../images/bowel-mvmt.jpg";
import javaNewsImage from "../../images/javaNews.png";
import netflixReviewsImage from "../../images/netflix-reviews.png";
import dwRugsImage from "../../images/dw-rugs.png";
import { Grid } from "@mui/material";
// import { Item} from "@mui/material";

const projects = {
  toiletTracker: {
    title: "Restroom Router",
    description:
      "Crowdsourcing the most transparent and up to date public restroom information. MERN stack application built with React, Apollo server, GraphQL, and MongoDB. MapBox API used for displaying restrooms on map.",
    deployedLink: "https://restroom--router.herokuapp.com/",
    github: "https://github.com/nirav-v/restroom-router",
  },
  adoptOwner: {
    title: "Adopt-an-Owner",
    description:
      "Switching the roles of the pet adoption market by allowing adoption agencies to find new owners through their online profile. Developed using RESTful routes, following MVC paradigm. User data stored and queried using MySQL database and Sequelize ORM. Front end built with HTML, CSS, JavaScript, and Handlebars",
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
  javaNews: {
    title: "Fake News Java API",
    description:
      "Social media based news application that allows users to post links to news articles, comment on posts, and upvote posts. Server created using Java with Spring Framework",
    deployedLink: "https://java-fake-news-api.herokuapp.com/",
    github: "https://github.com/nirav-v/fake-news-java-api",
  },
  netflixReviews: {
    title: "Netflix Review Board",
    description:
      "Pulling from a database of roughly 9000 Netflix movies and shows, this site allows a user to leave their public review for any of them. Backend built with Python and Flask Server. MySQL database with SqlAlchemy ORM. Frontend built with HTML, CSS, JavaScript",
    deployedLink: "https://netflix-public-review-board.herokuapp.com/",
    github: "https://github.com/nirav-v/netflix-show-reviews",
  },
  secureRando: {
    title: "Secure Rando",
    description:
      "Generate a random password based on the criteria the user gets prompted to select. HTML, CSS, and JavaScript",
    deployedLink: "https://nirav-v.github.io/secure-rando/",
    github: "https://github.com/nirav-v/secure-rando",
  },
  dwRugs: {
    title: "DW Rugs",
    description:
      "A static website with a gallery page that I developed for my close friend's custom rug making business. I was able to use my front-end development skills to promote a small business and showcase their work.",
    deployedLink: "https://dwrugs.com/",
    github: "https://github.com/nirav-v/dw-rugs",
  },
};

function Portfolio() {
  return (
    <div className="projects container d-flex p-4">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Project
            title={projects.toiletTracker.title}
            imageSrc={bowelMvmtImage}
            description={projects.toiletTracker.description}
            deployedLink={projects.toiletTracker.deployedLink}
            github={projects.toiletTracker.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project
            title={projects.dwRugs.title}
            imageSrc={dwRugsImage}
            description={projects.dwRugs.description}
            deployedLink={projects.dwRugs.deployedLink}
            github={projects.dwRugs.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project
            title={projects.netflixReviews.title}
            imageSrc={netflixReviewsImage}
            description={projects.netflixReviews.description}
            deployedLink={projects.netflixReviews.deployedLink}
            github={projects.netflixReviews.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project
            title={projects.adoptOwner.title}
            imageSrc={adoptOwnerImage}
            description={projects.adoptOwner.description}
            deployedLink={projects.adoptOwner.deployedLink}
            github={projects.adoptOwner.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project
            title={projects.golfapedia.title}
            imageSrc={golfapediaImage}
            description={projects.golfapedia.description}
            deployedLink={projects.golfapedia.deployedLink}
            github={projects.golfapedia.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project
            title={projects.secureRando.title}
            imageSrc={secureRandoImage}
            description={projects.secureRando.description}
            deployedLink={projects.secureRando.deployedLink}
            github={projects.secureRando.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project
            title={projects.javaNews.title}
            imageSrc={javaNewsImage}
            description={projects.javaNews.description}
            deployedLink={projects.javaNews.deployedLink}
            github={projects.javaNews.github}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Portfolio;
