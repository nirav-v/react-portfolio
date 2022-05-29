import Header from "../Header";
import Project from "../Project";

const projects = {
    adoptOwner: {
        title: "Adopt-an-Owner",
    }
}

function Portfolio() {
    return ( 
    <div>
    <Header />
    <Project title={projects.adoptOwner.title} />
    </div>
    );
}

export default Portfolio;