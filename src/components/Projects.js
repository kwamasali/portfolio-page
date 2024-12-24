import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gericht.png";
import projImg2 from "../assets/img/hoobank.png";
import projImg3 from "../assets/img/gpt.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Gericht Restaurant",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Hoobank App",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "GPT-3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In the dynamic landscape of software engineering, I craft innovative technological solutions that transform complex challenges into elegant, efficient systems. My approach blends technical expertise with strategic thinking, focusing on developing robust, scalable applications that solve real-world problems. Through meticulous design, advanced programming techniques, and a commitment to continuous improvement, I create software that not only meets technical requirements but also delivers exceptional user experiences and drives meaningful technological progress.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav id="pills-tab">
                    <Nav.Item>
                    
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
