import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import MainFeature1 from "../components/TwoColWithButton.js";
import Features from "../components/ThreeColSimple.js";
import TeamCardGrid from "../components/ProfileThreeColGrid.js";

import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomerLoveIconImage from "../images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return (
    <React.Fragment>
      <MainFeature1
        subheading={<Subheading>About GADGETOPIA</Subheading>}
        heading="Who are WE ?"
        buttonRounded={false}
        primaryButtonText="See our Products"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "You won't only find supplies and equipment at Gadgetopia. We are also available around-the-clock for any technology-related emergency. Although we have already stated that we are flexible, the 24-7 Service is mainly focused on our solutions services."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "We have the well-built logistics support to ensure the fastest delivery amongst the competitorsThe Gadetopia Team focuses on the needs of the customer, fulfils their requirements, and works hard to go above and beyond their expectations."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      </React.Fragment>
  );
};
