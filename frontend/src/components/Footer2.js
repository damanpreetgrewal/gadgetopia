import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "./Buttons.js";

import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-900 text-gray-100`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`;
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase text-white`;

const LinkList = tw.ul`mt-4 text-sm font-medium text-white`;
const LinkListItem = tw.li`mt-3 text-white`;
const Link = tw.a`border-b-2 border-transparent text-white hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img``;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! `;
const SubscribeNewsletterContainer = tw.div``;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
  PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`;
const CopyrightNotice = tw.div``;
const CompanyInfo = tw.div``;

const Divider = tw.div`my-8 border-b-2 border-gray-800`;
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoImg
                src="/images/gadgetopia.png"
                style={{ height: "8rem" }}
              />
            </LogoContainer>
            <CompanyAddress>
              Conestoga College, Kitchener Ontario N2E3R3
            </CompanyAddress>
            <SocialLinksContainer>
              <SocialLink href="https://facebook.com">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/shop">Shop</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/about">About Us</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/contact">Contact Us</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/cart">Cart</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Product</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/login">Log In</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/register">Register</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/profile">Profile</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Extra</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>+1 (548) (333)-3036</LinkListItem>
              <LinkListItem>
                <Link href="mailto:support@gadgetopia.com">
                  support@gadgetopia.com
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Extra</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Extra</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <SubscribeNewsletterColumn>
              <SubscribeNewsletterContainer>
                <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
                <SubscribeText>
                  We deliver high quality blog posts written by professionals
                  weekly. And we promise no spam.
                </SubscribeText>
                <SubscribeForm method="get" action="#">
                  <Input type="email" placeholder="Your Email Address" />
                  <SubscribeButton type="submit">Subscribe</SubscribeButton>
                </SubscribeForm>
              </SubscribeNewsletterContainer>
            </SubscribeNewsletterColumn>
          </Column>
        </FiveColumns>
        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>
            &copy; Copyright 2022, Gadgetopia Inc.
          </CopyrightNotice>
          <CompanyInfo>An Electronics Retail Store</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
