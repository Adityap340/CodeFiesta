import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-xxl m-5 mx-auto p-20">
          <div className="text-center">
            <a href="#">
              <img className="mx-auto rounded-t-lg mb-3 animate-bounce" src={Logo} alt="Logo" />
            </a>

            <h1 className="text-pink-500 text-5xl font-bold mb-10">Trial By Trivia</h1>

            <h1 className="mx-20 text-justify mb-2 text-lg">
              <b>Join the ultimate trivia challenge and test your knowledge!</b>
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Instructions for the Quiz:</h2>
          <p className="text-gray-700">
            Please read the instructions carefully before proceeding to the quiz.
          </p>
        </div>
        <div>
          <Link
            to="/login"
            className="btn btn-primary bg-pink-700 px-5 py-2 rounded text-white hover:text-pink-700 hover:bg-white border border-pink-700 hover:border-pink-700"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
