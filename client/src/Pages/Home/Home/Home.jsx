import React from "react";
import "./Home.css";
import home from '../../../Assests/images/home.svg'
import ViewPost from "../ViewPost/ViewPost";
const Home = () => {
  return (
    <div>
     <img src={home}></img>
      <ViewPost />
    </div>
  );
};

export default Home;