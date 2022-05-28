import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import Me from "./image/ME.png";
import Rocket from "./image/Rocket.png";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Full Stack Developer",
        "React Native Developer",
        "Digital marketer",
        "Web Developer",
      ],
    });
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const textRef = useRef();

  return (
    <section
      id="Home"
      className="container-fluid"
      style={{
        transform: `translateY(${offsetY * 0.5}px)`,
      }}
    >
      <div className="row flex-column-reverse flex-lg-row">
        <div
          id="heroText"
          className="col-sm-6 text-center text-position"
          style={{ transform: `translateX(-${offsetY * 4}px)` }}
        >
          <h1 className="heroDc"> Hi There!I 'm</h1>{" "}
          <h1 className="heroName"> Vet Bonnary </h1>{" "}
          <h1 className="heroDc">
            I 'm a <span ref={textRef}></span>{" "}
          </h1>{" "}
          <img src={Rocket} alt="Rocket" />
        </div>{" "}
        <div className="col-sm-6 d-flex justify-content-center">
          <img
            className="heroImg"
            src={Me}
            alt="Me"
            style={{ transform: `translateX(${offsetY * 4}px)` }}
          />{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
