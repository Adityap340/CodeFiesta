import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-xxl bg-white border border-gray-200 rounded-lg shadow max-w-xxl m-5 mx-auto p-20">
          <div className="text-center">
            <a href="#">
              <img className="mx-auto rounded-t-lg mb-3 animate-bounce" src={Logo} alt="Logo" />
            </a>

            <h1 className="text-pink-500 text-5xl font-bold mb-10">Trial By Trivia</h1>

            <h1 className="mx-20 text-justify mb-2 text-lg">
              <b>Join the ultimate trivia challenge and test your knowledge!</b>
            </h1>
            <h1 className="mx-20 text-justify mb-2">
              Trial by Trivia is an exhilarating quiz event that promises a thrilling blend of knowledge and entertainment. Participants engage in a battle of wits as they tackle a diverse range of trivia questions spanning various topics such as history, science, pop culture, and more. With rounds designed to challenge intellect and stimulate curiosity, contestants must tap into their wealth of general knowledge to outsmart their competitors. Whether you're a seasoned trivia enthusiast or a casual player, the event offers an inclusive and engaging environment for all. As the questions unfold, participants will experience a dynamic quiz atmosphere filled with excitement, camaraderie, and the chance to showcase their expertise in a friendly competition. "Trial by Trivia" is not just a quiz; it's an immersive and entertaining journey into the vast realm of facts and fun, making it a must-attend experience for anyone eager to test their knowledge and enjoy an evening of spirited competition.
            </h1>
          </div>
          <div className="flex justify-center">
            <Link
              to="/instructions"
              className="btn btn-primary align-center bg-pink-700 px-5 py-2 rounded text-white hover:text-pink-700 hover:bg-white border border-pink-700 hover:border-pink-700"
            >
              Let's Start!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
