import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "GADGETOPIA - Pocket Friendly Gadgets Store",
  description:
    "Computers , Electronics , Gadgets and a lot of tech products ! ",
  keywords: "Computers , Electronics , Gadgets and Mobile Products",
};

export default Meta;
