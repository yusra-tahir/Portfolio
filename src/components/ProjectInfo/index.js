import { Container, Row } from "react-bootstrap";
import Artfolio from "../../assets/img/artfolio.png";
import QuizP from "../../assets/img/quiz-pro-quo.png";
import ADAY from "../../assets/img/a-day.png";
import Unwind from "../../assets/img/unwind.png";
import {
  bootstrap,
  css,
  figma,
  flask,
  html,
  jest,
  js,
  mongodb,
  node,
  pytest,
  python,
  react,
  reactbs,
} from "../../assets/img";
const ProjectInfo = () => {
  return (
    <>
      <Container size={12}>
        <Row>
          <h1> Artfol.io </h1>

          <img src={Artfolio} />
          <div className="techN">
            <img src={css} />
            <img src={flask} />
            <img src={mongodb} />
            {/* <img src={pytest} /> */}
            <img src={reactbs} />
            <img src={react} />
            <img src={python} />
            <img src={jest} />
            <img src={figma} />
          </div>
          <div>
            A marketplace for Artists to find their next gig. This was a
            collaboration project with Micheal, Prishal, Albert and JianLi. We
            took a mobile-first approach and it is responsive using any gadget.
            Using Python in the back-end and React for the frontend.
          </div>
          <button>
            <a
              href="https://github.com/yusra-tahir/Artfolio-Lap-4-Project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://artfol-io.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Deployment
            </a>
          </button>
        </Row>
        <Row>
          <h1> QuizProQuo </h1>

          <img src={QuizP} />
          <div className="techN">
            <img src={css} />
            <img src={html} />
            <img src={mongodb} />
            <img src={node} />
            <img src={jest} />
            <img src={js} />
            <img src={figma} />
          </div>
          <div>
            A marketplace for Artists to find their next gig. This was a
            collaboration project with Micheal, Prishal, Albert and JianLi. We
            took a mobile-first approach and it is responsive using any gadget.
            Using Python in the back-end and React for the frontend.
          </div>
          <button>
            <a
              href="https://github.com/yusra-tahir/QuizProQuo"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://quiz-pro-quo.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Deployment
            </a>
          </button>
        </Row>
        <Row>
          <h1> A.DAY </h1>

          <img src={ADAY} />
          <div className="techN">
            <img src={css} />
            <img src={html} />
            <img src={bootstrap} />
            <img src={node} />
            <img src={jest} />
            <img src={js} />
          </div>
          <div>
            A marketplace for Artists to find their next gig. This was a
            collaboration project with Micheal, Prishal, Albert and JianLi. We
            took a mobile-first approach and it is responsive using any gadget.
            Using Python in the back-end and React for the frontend.
          </div>
          <button>
            <a
              href="https://github.com/yusra-tahir/A.DAY"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </Row>
        <Row>
          <h1> UNWIND </h1>

          <img src={Unwind} />
          <div className="techN">
            <img src={css} />
            <img src={html} />
            <img src={node} />
            <img src={jest} />
            <img src={js} />
            <img src={figma} />
          </div>
          <div>
            A marketplace for Artists to find their next gig. This was a
            collaboration project with Micheal, Prishal, Albert and JianLi. We
            took a mobile-first approach and it is responsive using any gadget.
            Using Python in the back-end and React for the frontend.
          </div>
          <button>
            <a
              href="https://github.com/yusra-tahir/unwind-one"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </Row>
      </Container>
    </>
  );
};

export default ProjectInfo;
