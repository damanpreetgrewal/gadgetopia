import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import ContactUsForm from "../components/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "../components/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <>
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Kitchener",
            description: (
              <>
                <Address>
                  <AddressLine>Activa Avenue</AddressLine>
                  <AddressLine>Kitchener, ON N2E3R3</AddressLine>
                </Address>
                <Email>contact@gadgetopia.com</Email>
                <Phone>+1 (548) 333-3036</Phone>
              </>
            ),
          },
          {
            title: "Waterloo",
            description: (
              <>
                <Address>
                <AddressLine>Lester Street</AddressLine>
                  <AddressLine>Waterloo, ON N2E3R3</AddressLine>
                </Address>
                <Email>contact@gadgetopia.com</Email>
                <Phone>+1 (548) 333-3036</Phone>
              </>
            ),
          },
          {
            title: "Cambridge",
            description: (
              <>
                <Address>
                <AddressLine>Townline Road</AddressLine>
                  <AddressLine>Cambridge, ON N2E3R3</AddressLine>
                </Address>
                <Email>contact@gadgetopia.com</Email>
                <Phone>+1 (548) 333-3036</Phone>
              </>
            ),
          },
          {
            title: "Toronto",
            description: (
              <>
                <Address>
                  <AddressLine>74 North York.</AddressLine>
                  <AddressLine>Toronto, ON N2E3R3</AddressLine>
                </Address>
                <Email>contact@gadgetopia.com</Email>
                <Phone>+1 (548) 333-3036</Phone>
              </>
            ),
          },
          {
            title: "Brampton",
            description: (
              <>
                <Address>
                  <AddressLine>6 Loomis Street</AddressLine>
                  <AddressLine>Brampton, ON N2E3R3</AddressLine>
                </Address>
                <Email>contact@gadgetopia.com</Email>
                <Phone>+1 (548) 333-3036</Phone>
              </>
            ),
          },
          {
            title: "Guelph",
            description: (
              <>
                <Address>
                  <AddressLine>Norfolk Street</AddressLine>
                  <AddressLine>Guelph, ON N2E3R3</AddressLine>
                </Address>
                <Email>contact@gadgetopia.com</Email>
                <Phone>+1 (548) 333-3036</Phone>
              </>
            ),
          },
        ]}
      />
    </>
  );
};
