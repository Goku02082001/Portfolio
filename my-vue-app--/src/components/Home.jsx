import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  const handleResumeClick = (e) => {
    e.preventDefault();
    const viewUrl =
      'https://drive.google.com/file/d/1Aci7_rSP3SLTU8my0pHRmMFdSakmlZht/view?usp=sharing';
    const downloadUrl =
      'https://drive.google.com/uc?export=download&id=1Aci7_rSP3SLTU8my0pHRmMFdSakmlZht';

    // Open the view link in a new tab
    window.open(viewUrl, '_blank', 'noopener,noreferrer');

    // Create a link element for downloading the file
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Gaurav Roy",
        "I'm full stack developer"
       
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            onClick={handleResumeClick}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
