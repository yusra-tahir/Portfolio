import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import QuizProQuo from "../../assets/img/quiz-pro-quo.png";
import Artfolio from "../../assets/img/artfolio.png";
import RepoTracker from "../../assets/img/repo-tracker.png";
import ADay from "../../assets/img/a-day.png";
import UNWIND from "../../assets/img/unwind.png";
import Portfolio from "../../assets/img/portfolio.png";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "My portfolio website ",
      imgUrl: Portfolio,
    },
    {
      title: "Quiz-Pro-Quo",
      description: "Quiz Game using API",
      imgUrl: QuizProQuo,
    },
    {
      title: "Artfol.io",
      description: "Marketplace for artists, find your next perfomer!",
      imgUrl: Artfolio,
    },
    {
      title: "Repository Tracker",
      description:
        "A repository tracker to get an overview of your work without visiting the site itself. ",
      imgUrl: RepoTracker,
    },
    {
      title: "A.DAY",
      description: "Track your habits and become the best you!",
      imgUrl: ADay,
    },
    {
      title: "UNWIND",
      description: "A community journaling website ",
      imgUrl: UNWIND,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A collection of projects worked on over the last 3 months,
                    created over a one week period using agile techniques within
                    a team.<br></br> Click on the project to see more!
                  </p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      
      
    </section>
  );
};

export default Projects;
