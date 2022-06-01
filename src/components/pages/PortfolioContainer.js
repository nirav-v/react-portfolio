import Project from "../Project";
import adoptOwnerImage from "../../images/adopt-an-owner.png";
import golfapediaImage from "../../images/golfapedia.png";
import secureRandoImage from "../../images/secure-rando.png";


const projects = {
  adoptOwner: {
    title: "Adopt-an-Owner",
    description: "Switching the roles of the pet search market",
    deployedLink: "https://radiant-wave-08847.herokuapp.com/",
    github: "https://github.com/nirav-v/adopt-an-owner",
  },
  golfapedia: {
    title: "Golfapedia",
    description:
      "Displaying local weather and nearby golf courses when users search a city",
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
      <div className="row">
        <div className="col">
          {/* Adopt-an-Owner */}
          <Project
            title={projects.adoptOwner.title}
            imageSrc={adoptOwnerImage}
            description={projects.adoptOwner.description}
            deployedLink={projects.adoptOwner.deployedLink}
            github={projects.adoptOwner.github}
          />
        </div>
        <div className="col">
          {/* Golfapedia */}
          <Project
            title={projects.golfapedia.title}
            imageSrc={golfapediaImage}
            description={projects.golfapedia.description}
            deployedLink={projects.golfapedia.deployedLink}
            github={projects.golfapedia.github}
          />
        </div>
        <div className="col">
          {/* Password Generator */}
          <Project
            title={projects.secureRando.title}
            imageSrc={secureRandoImage}
            description={projects.secureRando.description}
            deployedLink={projects.secureRando.deployedLink}
            github={projects.secureRando.github}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
