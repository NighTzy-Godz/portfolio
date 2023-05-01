import { Link } from "react-router-dom";
import "../assets/css/project_card.css";

const ProjectCard = ({ project }) => {
  const { id, name, thumbnail, shortDesc, technologies } = project;
  const renderTechs = technologies.map((techs) => {
    return <li key={techs.id}>{techs.name}</li>;
  });
  return (
    <div className="project_card">
      <img src={thumbnail} alt="" />

      <div className="project_details">
        <h1>{name}</h1>
        <p>{shortDesc}</p>

        <h3>Technologies Used:</h3>
        <ul>{renderTechs}</ul>
        <Link to={`project/${id}`}>See More</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
