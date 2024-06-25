import React from "react";

import { CssBaseline } from "@mui/material";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <CssBaseline>
      <div className="footer">
        <div className="navLogo">
          <Link to="/">{/* <img src={logo} alt="" /> */}</Link>
          <Typography variant="h6">
            <Link to="/">Job Portal</Link>
          </Typography>
        </div>
        <Typography className="rights">
          All Rights Reserved &copy; 2023
        </Typography>
      </div>
    </CssBaseline>
  );
};

export default Footer;