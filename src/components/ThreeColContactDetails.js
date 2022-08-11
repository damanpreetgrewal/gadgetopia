import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./Headings.js";
import { SectionDescription } from "./Typography.js";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const ThreeColContactDetails = ({
  cards = null,
  heading = "Our Offices",
  subheading = "Locations",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  const defaultCards = [
    {
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Reliable",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Easy",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Customizable",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Fast",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
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

export default ThreeColContactDetails;
