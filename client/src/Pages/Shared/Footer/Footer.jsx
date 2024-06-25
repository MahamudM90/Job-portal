import React from "react";

import { CssBaseline } from "@mui/material";
import logo from '../../../Assests/logo.png'
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <CssBaseline>
      <div className="footer">
        <div className="navLogo">
          
          <Typography variant="h6">
          
          </Typography>
        </div>
        <Typography className="rights">
        💙Developed By Mahamud Hasan &copy; 2024
        </Typography>
      </div>
    </CssBaseline>
  );
};

export default Footer;