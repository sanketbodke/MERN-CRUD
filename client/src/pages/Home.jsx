import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";
import "../App.css"
import "../style/home.css"
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
    return (
        <div className="homeContainer">
            <div className="textContainer">
                <h1>CRUD Application Using MERN Stack </h1>
                <div className="iconsContainer">
                    <DiMongodb/>
                    <SiExpress/>
                    <FaReact/>
                    <FaNodeJs/>
                </div>
                <p>The MERN (MongoDB, Express.js, React, Node.js) stack is a popular choice for building full-stack web
                    applications due to its versatility and efficiency. In this tutorial, we will walk through the
                    process of creating a simple CRUD (Create, Read, Update, Delete) application using the MERN
                    stack.</p>
                <Link to="/users" className="btn">Let's Start <FaArrowRight /></Link>
            </div>
        </div>
    );
};

export default Home;