import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./Headings.js";
import { SectionDescription } from "./Typography.js";

import defaultCardImage from "../images/shield-icon.svg";

import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomizeIconImage from "../images/customize-icon.svg";
import FastIconImage from "../images/fast-icon.svg";
import ReliableIconImage from "../images/reliable-icon.svg";
import SimpleIconImage from "../images/simple-icon.svg";

const Container = tw.div`relative -mx-8 px-8 text-black grid`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-black`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-black`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal leading-snug`}
  }
`;

const Features = ({
  cards = null,
  heading = "Amazing Features",
  subheading = "",
  description = "What makes us Special? Content with reliability, quality with speed.",
}) => {
  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security infrastructure.",
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description:
        "You won't only find supplies and equipment at Gadgetopia. We are also available around-the-clock for any technology-related emergency.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Filter out the most and find out the precise.",
    },
    {
      imageSrc: ReliableIconImage,
      title: "Reliable",
      description:
        "We only sell products that are verified to ensure they look like what the customer ordered.",
    },
    {
      imageSrc: FastIconImage,
      title: "Fast",
      description:
        "We have the well-built logistics support to ensure the fastest delivery amongst the competitors",
    },
    {
      imageSrc: SimpleIconImage,
      title: "Easy",
      description: "More you provide information, the easier it to order.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};

export default Features;
