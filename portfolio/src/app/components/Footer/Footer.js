import React from "react";
import Accordian from "../Footer/Accordian";

export default function Footer() {
  const services = ["Web Development", "Logo Design", "Banner Design"];
  const companys = ["About Us", "Contact Me"];
  const helpings = ["FAQ", "Support"];
  const legals = ["Privacy Policy", "Terms of Service"];
  const service = [
    "Full-Stack Development Services",
    "UI/UX Design",
    "E-commerce Development",
    "API Development and Integration",
    "Graphic Design Services",
  ];
  const company = [
    "Communication ",
    "Project Management",
    "Privacy and Data Protection",
  ];
  const helping = [
    "Contact",
    // "FAQs", "Live Chat"
  ];
  const legal = [
    "Accessibility",
    "Returns Policy",
    "Refund Policy",
    " Hiring Statistics",
  ];

  return (
    <div id="footer" className="mt-[5px]">
      <div className="bg-white  pt-0 lg:pt-[100px]">
        <div
          className="max-w-[1140px] bg-[#48AFDE] rounded-xl  px-[20px] sm:px-[64px] py-[64px] m-auto"
          style={{ transform: "translate(0px, 70px)" }}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9">
              <p className="text-[30px] text-white text-center lg:text-start">
                Unleash Your Potential with Me{" "}
              </p>
              <p className="text-white font-sans text-center lg:text-start">
                Explore my journey, showcase of skills, and past projects.
                Let&apos;s connect and create something amazing together. Your
                success starts here, and I&apos;m excited to be a part of it!
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="flex justify-center mt-5 lg:mt-0">
                <a
                  target="blank"
                  href="/page/contactme#contact"
                  className="font-sans  cursor-pointer px-10 py-5 bg-[#223740] hover:bg-[#223740] rounded-xl text-white font-medium text-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

        <footer className="bg-[#232323] text-[#7b858b]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Mobile Accordion Section */}
        <div className="md:hidden space-y-4">
          <Accordian title="Services" content={service} />
          <Accordian title="Company" content={company} />
          <Accordian title="Helpful Links" content={helping} />
          <Accordian title="Legal Policy" content={legal} />

          <div className="text-center mt-10">
            {/* Placeholder logo */}
            <div className="text-teal-600 flex justify-center mb-4">
              {/* <span className="text-2xl font-bold">LOGO</span> */}
            </div>
            <p className="text-sm">You Deserve It To Be Seen!</p>
            <p className="text-xs mt-2">&copy; 2024 Bibash</p>
          </div>
        </div>

        {/* Desktop Grid Section */}
        <div className="hidden md:grid grid-cols-5 gap-6 pt-10">
          <div>
            {/* <span className="text-teal-500 font-bold text-xl">LOGO</span> */}
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <ul>
              {services.map((item, idx) => (
                <li key={idx} className="mt-1 hover:text-white cursor-pointer">
                 {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul>
              {companys.map((item, idx) => (
                <li key={idx} className="mt-1 hover:text-white cursor-pointer">
                  <a href={`${item=="About Us" ? `/#about-me-component` : "/page/contactme" }`}>
                    {item}
                    </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Helpful Links</h3>
            <ul>
              {helpings.map((item, idx) => (
                <li key={idx} className="mt-1 hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Legal Policy</h3>
            <ul>
              {legals.map((item, idx) => (
                <li key={idx} className="mt-1 hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="hidden md:flex justify-center mt-10 text-xs">
          &copy; 2024 Bibash. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
}
