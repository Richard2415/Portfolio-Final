import React from "react";
import CustomNav from "./NavBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DeveloperSvg from "../utils/developer";
import Particles from "../utils/particles";
import Typist from "react-typist";
// import About from "./About"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  return (
    <>
      <CustomNav />
      <Container className="h-100 home-container" role="main">
        <Row xs={1} md={2} className="h-100">
          <Col className="my-auto">
            <div>
              <h5 className="color-custom-grey font-weight-bold mb-0">Hey !</h5>
              <h1 className="color-name-blue text-boldest">I'm Richard Selvaraj</h1>
              <span className="color-custom-grey h4">
                <Typist className="TypistExample-message" cursor={{ show: false }}>
                  <span>I'm a </span><span className="font-weight-bold">
                    <span className="font-weight-bold">Front-end <span className="font-weight-normal">Developer</span></span>
                    <Typist.Backspace count={19} delay={3500} /> Full Stack</span> Developer </Typist></span><br />
              <span className="color-custom-grey h5">I specialized in developing Front-end applications</span><br />
            </div>
            <div className="d-flex my-4">
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="github" onClick={() => window.open('https://github.com/Richard2415', '_blank')}><FontAwesomeIcon size="2x" icon={faGithubSquare} /></Button>
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="linkedin" onClick={() => window.open('https://www.linkedin.com/in/richard-selvaraj-483039147/', '_blank')}><FontAwesomeIcon size="2x" icon={faLinkedin} /></Button>
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="Email" onClick={() => window.open('mailto:richardselvaraj07@gmail.com?subject="Hello !"', '_blank')}><FontAwesomeIcon spin size="2x" icon={faEnvelopeSquare} /></Button>
            </div>
            <Button className="bg-custom-blue font-weight-bold shadow-sm border-0 resume-btn" onClick={() => window.open('https://drive.google.com/file/d/1GQTgvIAtmLT4UJ-Jgi7OM0PuM_3Sx55-/view')}>View Resume</Button>
          </Col>
          <Col className="w-100 my-auto d-none d-md-block">
            <DeveloperSvg />
          </Col>
        </Row>
      </Container>
      <Particles />
      {/* <About /> */}
    </>
  )
};

export default Home;
