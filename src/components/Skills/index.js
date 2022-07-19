import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import github from "../../assets/img/github.png";
import pytest from "../../assets/img/pytest.png";
import bootstrap from "../../assets/img/bootstrap.png";
import react from "../../assets/img/react.png";
import js from "../../assets/img/js.png";
import python from "../../assets/img/python.png";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css-3.png";
import php from "../../assets/img/php.png";
import figma from "../../assets/img/figma.png";
import sql from "../../assets/img/postgre.png";
import node from "../../assets/img/nodejs.png";
import reactbs from "../../assets/img/reactbs.png";
import jest from "../../assets/img/jest.png";
import mongoDB from "../../assets/img/mongodb.png";
import bcrypt from "../../assets/img/bcrypt.png";
import flask from "../../assets/img/flask.webp";
import jupyter from "../../assets/img/jupyter.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have used a combination of the technologies below to create
                projects.
                <br></br> See what I have learnt over the last 13-weeks!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt=" React Icom" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Bootsrap Icon" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={js} alt="JavaScript Icon" />
                  <h5>Javascript ES5/6</h5>
                </div>
                <div className="item">
                  <img src={reactbs} alt="React-Bootsrap Icon" />
                  <h5>React Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python Icon" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={html} alt="HTML5 Icon" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={github} alt="Github Icon" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS Icon" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={php} alt="PHP Icon" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={jest} alt="Jest Icon" />
                  <h5>Jest Testing Library</h5>
                </div>
                <div className="item">
                  <img src={pytest} alt="Pytest Icon" />
                  <h5>Pytest</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="Figma Icon" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="SQL Icon" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={mongoDB} alt="MongoDB Icon" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={bcrypt} alt="Bcrypt Icon" />
                  <h5>Bcrypt</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Node Icon" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={flask} alt="Flask Icon" />
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <img src={jupyter} alt="Jupyter Icon" />
                  <h5>Jupyter</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
