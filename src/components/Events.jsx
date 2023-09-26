import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import EventsCard from "./EventsCard";
import eventImg1 from "../assets/img/brochure-ctf.png";
import "animate.css";
import TrackVisiblity from "react-on-screen";
import Calendar from "./Calendar";

function Events() {
  const events = [
    {
      title: "Capture The Flag",
      description: "Cyber Security Event",
      imgUrl: eventImg1,
    },
    {
      title: "Capture The Flag",
      description: "Cyber Security Event",
      imgUrl: eventImg1,
    },
    {
      title: "Capture The Flag",
      description: "Cyber Security Event",
      imgUrl: eventImg1,
    },
  ];

  return (
    <section className="event" id="events">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisiblity>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Events</h2>
                  <p>
                  Stay up-to-date with the latest in cybersecurity at OWASP TCET's events section. Explore our diverse calendar of webinars, conferences, and workshops, featuring industry experts and thought leaders. Join us in elevating your cybersecurity knowledge and network with like-minded professionals.
                  </p>
                  <Tab.Container id="events-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="mb-5 nav-pills justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link id="upcom-event" eventKey="first">
                          Upcoming Event
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link id="past-event" eventKey="second">
                          Previous Event
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Calendar />
                        </Row>
                        <Row>
                          {events.map((events, index) => {
                            return <EventsCard key={index} {...events} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        Prepare for an exhilarating 3-day cybersecurity event at OWASP TCET’s Capture The Flag (CTF). Day 1 kicks off with four accessible machines which remain live till day 2. Top 10 participants qualify for an intense experience with machine 5 set to hard mode. It’s a compact yet comprehensive journey to enhance your cybersecurity skills. Join us for this exciting CTF adventure!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisiblity>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Events;
