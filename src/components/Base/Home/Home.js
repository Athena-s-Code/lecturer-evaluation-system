import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="home">
      <Navbar />
      <div className="home_body">
        {user.isLogged && <h1 className="welcome-text">successfully login</h1>}
        {!user.isLogged && <h1 className="welcome-text">Please login</h1>}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
