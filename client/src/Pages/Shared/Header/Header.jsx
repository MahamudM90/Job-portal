import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./Header.css";
import { Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import logo from "../../../Assets/logo.jpg";

import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser().then(() => {
      console.log("User Log Out");
      toast("User Log Out");
    });
  };

  return (
    <CssBaseline>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="footerNav">
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
              >
                <img className="imgLogo" src={logo} alt="logo" />
              </IconButton>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="title"
            >
              <Link to="/">Job Portal</Link>
            </Typography>
            {user?.uid ? (
              <div>
                <Link to="/create-post" className="loginBtn">
                  <Button color="inherit">Create Job Post</Button>
                </Link>
                <Link to="/view-post" className="loginBtn">
                  <Button color="inherit">View Job Posts</Button>
                </Link>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login" className="loginBtn">
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </CssBaseline>
  );
};

export default Header;