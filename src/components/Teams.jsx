import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/Sr-core-img/webMaster.png"
import projImg2 from "../assets/img/Sr-core-img/treasurer.png";
import projImg3 from "../assets/img/Sr-core-img/Tech-head.png";
import srSecImg from "../assets/img/Sr-core-img/secretary.png";
import srPrImg from "../assets/img/Sr-core-img/srPR.png"
import srEmImg from "../assets/img/Sr-core-img/em.png"
import jrOutreachImg from "../assets/img/Jr-core-img/jrOutreachImg.png"
import jrSecImg from "../assets/img/Jr-core-img/jrSec.png";
import eventCordImg from "../assets/img/Jr-core-img/eventCord.png";
import webLeadImg from "../assets/img/Jr-core-img/webLead.png";
import jrCreativeImg from "../assets/img/Jr-core-img/jrCreative.png"
import wcWebImg1 from "../assets/img/Wc-img/web1.png";
import wcWebImg2 from "../assets/img/Wc-img/web2.png";
import wcTechImg1 from "../assets/img/Wc-img/tech1.png";
import wcTechImg2 from "../assets/img/Wc-img/tech2.png";
import wcCreativeImg1 from "../assets/img/Wc-img/creative1.png";
import wcCreativeImg2 from "../assets/img/Wc-img/creative2.png";
import wcCreativeImg3 from "../assets/img/Wc-img/creative3.png";
import wcOreachImg1 from "../assets/img/Wc-img/outreach1.png";
import wcOreachImg2 from "../assets/img/Wc-img/outreach2.png";
import wcOreachImg3 from "../assets/img/Wc-img/outreach3.png";
import wcOreachImg4 from "../assets/img/Wc-img/outreach5.png";
import wcOreachImg5 from "../assets/img/Wc-img/outreach4.png";
import wcOreachImg6 from "../assets/img/Wc-img/outreach6.png";
import wcOreachImg7 from "../assets/img/Wc-img/outreach7.png";


import "animate.css";
import TrackVisibility from "react-on-screen";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Teams() {
  const srTeams = [
    {
      title: "Rhea Rajput",
      description: "Secratery",
      imgUrl: srSecImg,
    },
    {
      title: "Sharez Shaikh",
      description: "Event Manager",
      imgUrl: srEmImg,
    },
    {
      title: "Shivam Mishra",
      description: "Technical Head",
      imgUrl: projImg3,
    },
    {
      title: "Vaibhav Singh",
      description: "Web Master",
      imgUrl: projImg1,
    },
    {
      title: "Harshit Pandey",
      description: "Outreach Manager",
      imgUrl: srPrImg,
    },
    {
      title: "Kaushal Agarwal",
      description: "Treasurer",
      imgUrl: projImg2,
    },
  ];

  const jrTeams = [
    {
      title: "Lakshya Singh",
      description: "Jr. Secratery",
      imgUrl: jrSecImg,
    },
    {
      title: "Dhiraj Kalwar",
      description: "Event Coordinator",
      imgUrl: eventCordImg,
    },
    {
      title: "Soorya Srihari",
      description: "Web Lead",
      imgUrl: webLeadImg,
    },
    {
      title: "Sharad Pandey",
      description: "Outreach Coordinator",
      imgUrl: jrOutreachImg,
    },
    {
      title: "Saumya Maheshwari",
      description: "Creative Lead",
      imgUrl: jrCreativeImg,
    },
  ];

  const wkTeams = [
    {
      title: "Amir Kamal",
      description: "Web Team",
      imgUrl: wcWebImg1,
    },
    {
      title: "Aman Sharma",
      description: "Web Team",
      imgUrl: wcWebImg2,
    },
    {
      title: "Harsh Upadhyay",
      description: "Technical Team",
      imgUrl: wcTechImg1,
    },
    {
      title: "Sujal Dyavanapelli",
      description: "Technical Team",
      imgUrl: wcTechImg2,
    },
    {
      title: "Aditya Maurya",
      description: "Creative Team",
      imgUrl: wcCreativeImg1,
    },
    {
      title: "Siddharth Babel",
      description: "Creative Team",
      imgUrl: wcCreativeImg2,
    },
    {
      title: "Tanmay Baur",
      description: "Creative Team",
      imgUrl: wcCreativeImg3,
    },
    {
      title: "Bhargav Nadiyana",
      description: "Outreach Team",
      imgUrl: wcOreachImg1,
    },
    {
      title: "Chinmay Alekar",
      description: "Outreach Team",
      imgUrl: wcOreachImg2,
    },
    {
      title: "Yagyesh yadav",
      description: "Outreach Team",
      imgUrl: wcOreachImg3,
    },
    {
      title: "Oshi Jamindar",
      description: "Outreach Team",
      imgUrl: wcOreachImg4,
    },
    {
      title: "Harsh Ghume",
      description: "Outreach Team",
      imgUrl: wcOreachImg5,
    },  
    {
      title: "Shreya Mishra",
      description: "Outreach Team",
      imgUrl: wcOreachImg6,
    },
    {
      title: "Ashutosh Goswamy",
      description: "Outreach Team",
      imgUrl: wcOreachImg7,
    },  
    
  ];
  return (
    <section className="project" id="project">
      <NavBar/>
      <Container>
        <Col>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2>Our Team</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="mb-5 nav-pills justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sr Core</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Jr Core</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">WC</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }>
                    <Tab.Pane eventKey="first">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 my-6 md:my-[50px] gap-y-11">
                          {srTeams.map((team, index) => {
                            return <ProjectCard key={index} {...team} />;
                          })}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 my-6 md:my-[50px] gap-y-11">
                          {jrTeams.map((team, index) => {
                            return <ProjectCard key={index} {...team} />;
                          })}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 my-6 md:my-[50px] gap-y-11">
                          {wkTeams.map((team, index) => {
                            return <ProjectCard key={index} {...team} />;
                          })}
                        </div>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Container>
      <Footer />
    </section>
  );
}
export default Teams;
