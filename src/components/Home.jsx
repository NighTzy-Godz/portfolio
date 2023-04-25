import React from "react";
import my_img from "../assets/img/pic_1.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <React.Fragment>
      <section className="home">
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
          <img src={my_img} alt="" />
        </div>
      </section>

      <section className="about" id="about">
        <h1>About Section Here Later</h1>
      </section>
    </React.Fragment>
  );
};

export default Home;
