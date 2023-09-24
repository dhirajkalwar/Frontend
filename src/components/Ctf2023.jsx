import NavBar from "./NavBar";
import LinuxBootLoader from "./LinuxBootLoader";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Ctfhome from "./Ctfhome";
import About from "./About";

function Ctf2023() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, e.g., fetching data or rendering content.
    setTimeout(() => {
      goScrollToUp();
      setLoading(false); // Set loading to false once your content has loaded/rendered.
    }, 5600); // Adjust the delay as needed.
  }, []);
  const goScrollToUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {loading ? (
        <LinuxBootLoader />
      ) : (
        <div>
          {/* {goScrollToUp()} */}
          <NavBar />
          <Ctfhome />
          {/* <About /> */}
          <Footer />
        </div>
      )}
    </div>
  );
}
export default Ctf2023;
