import Header from "../Header";
import Project from "../Project";
import adoptOwnerImage from '../../images/adopt-an-owner.png'


const projects = {
    adoptOwner: {
        title: "Adopt-an-Owner",
        description: "Switching the roles of the pet search market",
        github: "https://github.com/nirav-v/adopt-an-owner"
    }
}

function Portfolio() {
    return ( 
    <div>
    <Header />
    <Project title={projects.adoptOwner.title} image={adoptOwnerImage} description={projects.adoptOwner.description} link={projects.adoptOwner.github}/>
    </div>
    );
}

export default Portfolio;