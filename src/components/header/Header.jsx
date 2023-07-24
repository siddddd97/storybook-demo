import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const StyledHeader = styled("div")(({ theme }) => ({
  boxSizing: "content-box",
  maxWidth: 956,
  display: "flex",
  paddingTop: "0.5rem",

  ".headerSiteTitle": {
    marginLeft: "1rem",
    padding: "0.5rem 0",
    position: "relative",
    borderLeft: "1px solid #cdcdcd",
    ".MuiTypography-root": {
      paddingLeft: "1rem",
      paddingTop: "0.5rem",
    },
  },
}));

export const Header = ({ icon, title }) => {
  return (
    <StyledHeader class>
      {icon === "white" && (
        <>
          <img
            src="https://ts.accenture.com/sites/BrandSpace/Pages/brand_assets_images/images/logo-white.png?v=20210126"
            height={60}
            width={140}
            alt="white-img"
          />
          <div className="headerSiteTitle">
            <Typography>{title}</Typography>
          </div>
        </>
      )}
      {icon === "black" && (
        <>
          <img
            src="https://ts.accenture.com/sites/BrandSpace/Pages/brand_assets_images/images/logo-black.png?v=20210126"
            height={60}
            width={140}
            alt="black-img"
          />
          <div className="headerSiteTitle">
            <Typography>{title}</Typography>
          </div>
        </>
      )}
      {icon === "white-purple" && (
        <>
          <img
            src="https://ts.accenture.com/sites/BrandSpace/Pages/brand_assets_images/images/logo-white-purple.png?v=20210126"
            height={60}
            width={140}
            alt="white-purple-img"
          />
          <div className="headerSiteTitle">
            <Typography>{title}</Typography>
          </div>
        </>
      )}
      {icon === "black-purple" && (
        <>
          <img
            src="https://ts.accenture.com/sites/BrandSpace/Pages/brand_assets_images/images/logo-black-purple.png?v=20210126"
            height={60}
            width={140}
            alt="black-purple-img"
          />
          <div className="headerSiteTitle">
            <Typography>{title}</Typography>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  /**
   * The color theme for the icon
   */
  icon: PropTypes.oneOf(["white", "white-purple", "black", "black-purple"]),
  /**
   * The title of the page
   */
  title: PropTypes.string,
};

Header.defaultProps = {
  icon: "black-purple",
  title: "Black-Purple ACN Logo Title",
};
