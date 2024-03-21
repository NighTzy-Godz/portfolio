import React, { useEffect, useRef, useState } from "react";
import my_img from "../assets/img/me_4.jpg";
import Typewriter from "typewriter-effect";
import projects from "../data/projectData";
import ProjectCard from "./ProjectCard";

import { toast } from "react-toastify";

const Home = ({ onShowChange }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const contactRef = useRef(null);
  useEffect(() => {
    const section = window.location.hash.substring(1);
    let sectionRef;

    if (section === "about") sectionRef = aboutRef.current;
    if (section === "home") sectionRef = homeRef.current;
    if (section === "projects") sectionRef = projectsRef.current;
    if (section === "contact") sectionRef = contactRef.current;
    if (sectionRef) {
      sectionRef.scrollIntoView();
    }
  }, []);

  const renderProjects = projects.map((proj) => {
    return (
      <React.Fragment key={proj.id}>
        <ProjectCard project={proj} />
      </React.Fragment>
    );
  });

  const handleFormChange = (e) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "This is just a dummy form, but thank you for trying it out!",
      { autoClose: 2000 }
    );
    setState({ ...state, name: "", email: "", msg: "" });
  };

  return (
    <React.Fragment>
      <main>
        <i
          class="fa-solid fa-arrow-right"
          id="navOpen"
          onClick={() => onShowChange(true)}
        ></i>

        <section className="home" id="home" ref={homeRef}>
          <div className="container">
            <div className="home_text_container">
              <div className="home_text">
                {" "}
                <h3>Hi, my name is</h3>
                <h1>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Aser James Hubero")

                        .pauseFor(1500)
                        .deleteAll()

                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p>
                  ReactJS developer with a passion for crafting intuitive user
                  interfaces.
                </p>
                <a href="#about">Explore More</a>
              </div>
            </div>
            <div className="me_img">
              <img src={my_img} alt="" />
            </div>
          </div>
        </section>
        <section className="about" id="about" ref={aboutRef}>
          <div className="container">
            <h1>About Me</h1>
            <p>
              Hello, my name is Aser James Hubero, and I recently graduated from
              Asia Pacific College with a strand of STEM, taking Information
              Technology as my specialization. I'm 20 years old and I'm a rising
              ReactJS developer with a lot of programming passion, but I'm also
              proficient in NodeJS, Express, and MongoDB, which makes it easy
              for me to work on MERN stack projects.
            </p>
            <p>
              I have a variety of hobbies outside of work that keep me content
              and balanced. During my junior high years, I played basketball for
              the varsity squad, which helped me learn important skills about
              discipline and working as a team. I was also able to demonstrate
              my problem-solving abilities under pressure by participating in
              Rubik's Cube competitions.
            </p>
            <p>
              In my spare time, I also like to play the guitar. It's a hobby
              that enables me to express my creativity and unwind after a long
              coding day. I'm constantly seeking for new methods to develop and
              get better at what I do, whether it's by taking online classes
              about my stack, reading tech blogs, or learn another instrument
              (Piano).
            </p>
            <p>
              If you're looking for a dedicated and talented developer to work
              on your project, I'd be more than happy to discuss how I can help.
              Feel free to
              <span>
                <a href="#contact"> contact me </a>
              </span>
              through my portfolio website to learn more about my{" "}
              <span>
                <a href="#projects"> projects. </a>
              </span>
            </p>
          </div>
        </section>
        <section className="projects" id="projects" ref={projectsRef}>
          <div className="container">
            <div className="mainText">
              <h1>My Projects</h1>
              <p>
                Here's a showcase of some of my best projects, ranging from
                simple demos to full-stack web applications. Each project
                represents my skills in ReactJS and MERN stack development, and
                highlights my ability to create dynamic and responsive web
                experiences. Browse through and see what I can do!
              </p>
            </div>
            <div className="projects_container">{renderProjects}</div>
          </div>
        </section>
        <section className="contact" id="contact" ref={contactRef}>
          <div className="container">
            <div className="contact_left">
              <h1>Contact Info</h1>
              <div className="contact_container">
                <h3>Physical Address: </h3>
                <div className="contact_info">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>South Signal Taguig City</p>
                </div>
              </div>
              <div className="contact_container">
                <h3>Email Address: </h3>
                <div className="contact_info">
                  <i className="fa-solid fa-envelope"></i>
                  <p>ajhubero16@gmail.com</p>
                </div>
              </div>
              <div className="contact_container">
                <h3>Social Links: </h3>
                <div className="contact_info">
                  <ul>
                    <li>
                      <p>
                        <i className="fa-brands fa-square-facebook"></i>
                        <a
                          href="https://www.facebook.com/Gwapitos.boss"
                          target="_blank"
                        >
                          Facebook
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa-brands fa-linkedin"></i>
                        <a href="https://linkedin.com/in/aserhubero">
                          LinkedIn
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <form className="contact_right" onSubmit={handleSubmit}>
              <h1>Get in Touch</h1>
              <div className="contact_form">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleFormChange}
                  placeholder="Ex. John Doe"
                  required={true}
                />
              </div>
              <div className="contact_form">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleFormChange}
                  placeholder="Ex. johndoe@email.com"
                  required={true}
                />
              </div>
              <div className="contact_form">
                <label htmlFor="name">Your Message</label>
                <textarea
                  type="text"
                  name="msg"
                  value={state.msg}
                  onChange={handleFormChange}
                  placeholder="Hello Mr John Doe..."
                  required={true}
                />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
