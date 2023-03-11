import React from "react";
import { MaxWidthWrapper } from "../Utils/Utils.style";
import {
  FooterWrapper,
  FooterContributionText,
  GithubLink,
} from "./Footer.style";
import { BsGithub } from "react-icons/bs";

import { Box } from "@mui/material";
const Footer = () => {
  return (
    <MaxWidthWrapper>
      <FooterWrapper>
        <FooterContributionText>
          Made by Saurabh Shukla{" "}
          {
            <GithubLink href="https://github.com/skinnyiam/sundar-portfolio">
              <BsGithub
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  paddingLeft: "7px",
                  cursor: "pointer",
                }}
              />
            </GithubLink>
          }
        </FooterContributionText>
      </FooterWrapper>
    </MaxWidthWrapper>
  );
};

export default Footer;
