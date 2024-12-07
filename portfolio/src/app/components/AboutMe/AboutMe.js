import { Hind } from "next/font/google";
import React from "react";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const AboutMe = () => {
  return (
    <>
      <div
        id="about-me-component"
        className="bg-[#E0F3FD] pt-[250px] mt-10 pb-[100px] lg:pb-[600px] relative lg:h-[800px] "
      >
        <div className="container m-auto">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px] text-[#EAF7FC]">
            About Me
          </h1>
          <h1 className="relative font-recoletaBlack text-5xl text-[#48AFDE] mb-5 -mt-40 md:px-24 px-5">
            About My Self
          </h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3  xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24">
            Knack of Building appplication with frontend and backend opetation
          </h4>
          <section className="relative flex flex-col lg:flex-row px-5 md:px-24">
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}
            >
              My name is Bibash Chaudhary. A intermediate and enthusiastic
              full-stack developer and designer. However, I am more that just
              your average programmer or designer. I've very fluid and never
              stop learning and adapting to new situations.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}
            >
              This attitude propelled me on an endless journy to learn a variety
              of skills, including UI/UX, design, front-end and back-end with
              restfull api and many more...
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}
            >
              When i encounter a new problem, I usually conduct extensive
              research on it in order to comprehend it and discover cutting-edge
              and innovative approaches for dealing with similar problems in the
              future. As a result , it's not unexpected that i've listed a lot
              of abilities here:
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
