import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import "../bootstrap4-neon-glow.css";
function Ctfhome() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["OWASP TCET"];
  const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex((prevIndex) => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  return (
    <section className="banner md:text-center font-Pt ctf-hero">
      <Container>
        <h1 className="text-4xl md:text-6xl ">CTF-2023</h1>
        <Row className="rounded align-items-center">
          {/* <Col xs={12} md={6} xl={7}> */}
          {/* <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
              > */}
          <h1 className="mb-5 text-4xl md:text-6xl">Presented By Owasp Tcet</h1>
          <p className="mt-2 text-2xl md:mt-5 md:text-4xl">
            Capture The Flag Challenge: Participants will engage in an exciting
            CTF competition that simulates real-world cybersecurity scenarios.
            The challenges are designed to test participants' knowledge and
            problem-solving skills in various areas of cybersecurity, including
            web application security, cryptography, forensics, and more.
          </p>
          {/* </div>
            )}
          </TrackVisibility> */}
        </Row>
      </Container>

      <div className="mt-20 font-Pt">
        <div className="w-full p-3 text-white md:text-center bg-grey-100">
          <div className="mb-8 text-4xl md:text-6xl font-900">About CTF</div>
          <div className="flex flex-col gap-5 mb-10 text-3xl md:text-5xl md:justify-center font-600">
            CTF Description
            <p className="text-2xl md:w-3/4 md:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="mb-10 text-3xl text-center md:text-5xl">
            Time Line
          </div>

          <ul className="timeline">
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Day 1</span>
                  <span class="time-wrapper">
                    <span class="time">3rd October</span>
                  </span>
                </div>
                <div class="desc">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      Machine 1<br /> Difficulty : Easy
                    </div>
                    <div className="mb-2">
                      {" "}
                      Machine 2<br /> Difficulty : Easy
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Day 2</span>
                  <span class="time-wrapper">
                    <span class="time">4th October</span>
                  </span>
                </div>
                <div class="desc">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      Machine 3<br /> Difficulty : Medium
                    </div>
                    <div className="mb-2">
                      {" "}
                      Machine 4<br /> Difficulty : Medium
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Day 3</span>
                  <span class="time-wrapper">
                    <span class="time">5th October</span>
                  </span>
                </div>
                <div class="desc">
                  <div className="flex flex-col items-center">
                    <div className="mb-2">
                      Machine 5 <br /> Difficulty : Hard
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <a href="/ctf2023/verify" target="_blank" className="nav-link">
            <button className="text-white btn btn-shadow btn-success">
              Link to Machine 5
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Ctfhome;
