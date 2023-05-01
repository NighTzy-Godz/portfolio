import { useParams } from "react-router-dom";
import projects from "../data/projectData";
import "../assets/css/single_project.css";
import { useEffect, useState } from "react";

const SingleProject = ({ onShowChange }) => {
  const { projectId } = useParams();
  const data = projects.find((proj) => proj.id === parseInt(projectId));

  const {
    name,
    pictures,
    description,
    features,
    duration,
    technologies,
    links,
  } = data;

  const [activeImg, setActiveImg] = useState(pictures[0]);

  const handleActiveImg = (img) => {
    setActiveImg(img);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="single_project">
      <i
        class="fa-solid fa-arrow-right"
        id="navOpen"
        onClick={() => onShowChange(true)}
      ></i>
      <div className="container">
        <section className="header">
          <h1 className="title">Project Name: {name}</h1>
          <p>{description}</p>
        </section>

        <section className="project_gallery">
          <h1>Images | Gallery</h1>
          <div className="large_img">
            <img src={activeImg} alt="" />
          </div>
          <div className="img_thumbnails">
            {pictures.map((pic) => (
              <img
                key={pic}
                src={pic}
                alt=""
                className={`${activeImg === pic ? "active" : ""}`}
                onClick={() => handleActiveImg(pic)}
              />
            ))}
          </div>
        </section>

        <section className="technologies">
          <h1>Technologies Used</h1>

          {technologies.map((tech) => (
            <div className="tech_container" key={tech.id}>
              <p>
                <span>{tech.name}</span> - {tech.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="features">
          <h1>Features</h1>
          {features.map((item, index) => (
            <p key={item}>
              {index + 1}. {item}
            </p>
          ))}
        </section>

        <section className="links">
          <h1>Project Links</h1>

          {links.map((link) => (
            <p key={link.id}>
              <span>{link.name}: </span>{" "}
              <a href={link.link} target="_blank">
                {link.link}
              </a>
            </p>
          ))}
        </section>

        <section className="team">
          <h1>Project Team</h1>
          <p>
            This project was created and executed independently without any
            other contributors, showcasing my strong project management skills.
          </p>
        </section>

        <section className="duration">
          <h1>Project Duration</h1>
          <p>
            This project was developed over the course of
            <span> {duration} </span>from initial planning to final deployment
          </p>
        </section>
      </div>
    </div>
  );
};

export default SingleProject;
