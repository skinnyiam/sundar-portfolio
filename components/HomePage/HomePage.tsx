import React from "react";
import {
  HomePageWrapper,
  HomeHeroSection,
  HomeImg,
  HeroText,
  HeroDetails,
  HeroLinks,
  HeroLink,
  BorderWrapper,
} from "./HomePage.style";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import About from "@/components/About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Resume from "../Resume/Resume";
import { MaxWidthWrapper } from "../Utils/Utils.style";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <BorderWrapper>
        <MaxWidthWrapper
          sx={{
            borderRadius: "8px",
            borderWidth: "1.5px",
            borderColor: "#635B5B",
            borderStyle: "solid",
          }}
        >
          <HomePageWrapper>
            <HomeHeroSection>
              <HeroText>Saurabh Shukla</HeroText>
              <HeroDetails>
                Front-End Developer | Guitarist | Sometimes Crack jokes
              </HeroDetails>
              <HeroLinks>
                <HeroLink href="https://www.linkedin.com/in/saurabh-shukla-885a711b3/">
                  <AiFillLinkedin />
                </HeroLink>
                <HeroLink href="https://twitter.com/Saurabh__ishere">
                  <AiFillTwitterCircle />
                </HeroLink>
                <HeroLink href="https://www.instagram.com/saurabh_ishere/">
                  <AiFillInstagram />
                </HeroLink>
                <HeroLink href="https://leetcode.com/saurabhshukla7878/">
                  <SiLeetcode />
                </HeroLink>
                <HeroLink href="https://github.com/skinnyiam/">
                  <AiFillGithub />
                </HeroLink>
              </HeroLinks>
            </HomeHeroSection>
            <HomeImg src="/portrait_2.png" />
          </HomePageWrapper>
          <About />
          <Projects />
          <Skills />
          <Education />
          <Resume />
          <Footer />
        </MaxWidthWrapper>
      </BorderWrapper>
    </>
  );
};

export default Homepage;
