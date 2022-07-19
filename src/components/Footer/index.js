import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://linkedin.com/in/yusramtahir"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="socials" size="25px" />
              </a>
              <a
                href="https://github.com/yusra-tahir"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="socials" size="25px" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
