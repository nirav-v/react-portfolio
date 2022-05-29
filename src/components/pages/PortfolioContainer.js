import NavBar from "../NavBar";
import Project from "../Project";

const projects = {
    adoptOwner: {
        title: "Adopt-an-Owner",
    }
}

function Portfolio() {
    return ( 
    <div>
    <NavBar />
    <Project title={projects.adoptOwner.title} />
    </div>
    );
}

export default Portfolio;