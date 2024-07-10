"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-purple-300 text-sm md:text-base font-semibold">
        <li>NEXT.JS</li>
        <li>REACT.JS</li>
        <li>JAVASCRIPT</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>BOOTSTRAP</li>
        <li>TAILWIND CSS</li>
        <li>FIGMA</li>
        <li>GIT</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-sm md:text-base">
        <div>
            <span className="font-semibold text-purple-400">Bachelor of Engineering in Computer Science (BE) </span><br />
            <span className=" text-gray-300">Pune District Education Association College Of Engineering (PDEA), Pune </span><br />
            <span className="text-gray-300">2019-2022</span><br />
            <span className="text-green-300">CGPA: 8.84</span><br />
       </div>

       <div>
            <span className="font-semibold text-purple-400">High school Diploma(MSBTE) </span><br />
            <span className=" text-gray-300">ABIT Shendre, Satara </span><br />
            <span className="text-gray-300">2016-2019</span><br />
            <span className="text-green-300">Percentage: 76%</span><br />
       </div>
       <div>
            <span className="font-semibold text-purple-400">SSC (Yashvant shikshan sanstha)</span><br />
            <span className=" text-gray-300">T.L Joshi vidyalaya wai,satara( wai highschool)</span><br />
            <span className="text-gray-300">2016</span><br />
            <span className="text-green-300">Percentage: 74.20%</span><br />
       </div>
        
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <div className=" text-gray-300 text-sm md:text-base">
      <ul className="list-disc pl-2">
       <h1 className="text-xl font-bold text-purple-400">Frontend developer</h1>
       <h3 className="font-bold text-purple-400"> AB Software Solutions, Satara | February 2023 - March 2024</h3>
       <li>As a Frontend Developer at AB software Solutions in Satara from May 2023 onwards, I have been actively involved in web 
           development, primarily utilizing technologies such as <b className=" text-green-400 font-medium">React.js, Next.js,</b> JavaScript, and Nodejs to ensure a smooth and 
           intuitive user experience. My proficiency extends to <b className=" text-green-400 font-medium">Next.js, JavaScript, HTML, and CSS.</b> </li>
           <li>Implemented and maintained front-end web applications, resulting in a 20% reduction in page load speeds and conversion rates 
            by utilizing modern web technologies such as React.js and best practices for user experience and accessibility.</li>
            <li>basic knowledge of Node.js.</li>
            <li>Developing user-friendly web pages and features to effectively optimize user experience.</li>
            <li>I also make <b className=" text-green-400 font-medium"> UI design</b> like Websites layouts, Admin panel layouts ,Mobile Application layouts by using <b className=" text-green-500 font-medium">Figma Software</b> </li>
      </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className=" lg:text-lg text-sm md:text-base">
            Hello, I am Kajal Shinde
           I have one year experience in AB software solutions company as a front end developer  
          With a strong background in web development. My expertise lies in leveraging the power of html,CSS, bootstrap ,React.js and JavaScript to build robust and dynamic web application.
          With the passion of problem solving, I enjoy contributing to innovative projects that make a difference. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;