import React from "react";
import { Link } from "react-router-dom";
import IMG_6349 from "../assets/IMG_6349.png";
import Logo from "../assets/logo.jpg";
import Profile from "../assets/profile.jpg";

// Your Card component
const Card = ({ imageUrl, title }) => (
  <div className="flex justify-center">
    <div className="max-w-xxl bg-white border border-gray-200 rounded-lg shadow m-5 mx-auto p-20">
      <div className="text-center">
        <a href="#">
          <img className="mx-auto rounded-t-lg mb-3" src={Logo} alt="Logo" />
        </a>

        <h1 className="text-pink-500 text-2xl font-bold mb-10">Trial By Trivia</h1>

        <h1 className="mx-20 text-justify mb-2">
          Trial by Trivia is an exhilarating quiz event that promises a thrilling blend of knowledge and entertainment. Participants engage in a battle of wits as they tackle a diverse range of trivia questions spanning various topics such as history, science, pop culture, and more. With rounds designed to challenge intellect and stimulate curiosity, contestants must tap into their wealth of general knowledge to outsmart their competitors. Whether you're a seasoned trivia enthusiast or a casual player, the event offers an inclusive and engaging environment for all. As the questions unfold, participants will experience a dynamic quiz atmosphere filled with excitement, camaraderie, and the chance to showcase their expertise in a friendly competition. "Trial by Trivia" is not just a quiz; it's an immersive and entertaining journey into the vast realm of facts and fun, making it a must-attend experience for anyone eager to test their knowledge and enjoy an evening of spirited competition.
        </h1>
      </div>
    </div>
  </div>
);

const EventCard = ({ imageUrl, title, p }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <div>
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl}
          style={{
            width: '200px', // Adjust the width as needed
            height: '200px', // Adjust the height as needed
          }} />
      </a>
      <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h1>
      <h1 className="text-center text-l tracking-tight text-gray-900 dark:text-white">{p}</h1>
    </div>

  </div>
);

// New Event Cards Row component
const EventCardsRow = () => (
  <div className="flex justify-center items-center">
    <EventCard imageUrl={Profile} title="Vaibhavi Hule" p="Team Mentor" />
    <EventCard imageUrl={Profile} title="Ayesha Mulani" p="Team Lead" />
    <EventCard imageUrl={Profile} title="Aditya Patil" p="Team Member" />
    <EventCard imageUrl={Profile} title="Nishant Gangurde" p="Team Member" />
    <EventCard imageUrl={Profile} title="Apurva Joshi" p="Team Member" />
  </div>
);

// Modified Selection component with Card components
const Selection = () => (
  <div>
    <Card
      imageUrl={Logo}
      title="Logo Quiz 1"
    />

    <h1 className="text-blue-500 text-2xl font-bold text-center">Our Events</h1>

    <div className="flex justify-center items-center h-screen">
      {/* First Card */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <div>
          <a href="#">
            <img className="rounded-t-lg" src={IMG_6349} alt="First Logo" />
          </a>
        </div>
        <div className="p-5">
          <Link to="/quiz">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Test your GK!
            </h5>
          </Link>
          <Link
            to="/quiz"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start Quiz
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Second Card */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="#">
          <img className="rounded-t-lg" src={IMG_6349} alt="Second Logo" />
        </a>
        <div className="p-5">
          <Link to="/tbt">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Guess the Logo!
            </h5>
          </Link>
          <Link
            to="/tbt"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start Quiz
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    <h1 className="text-center text-pink-500 text-2xl font-bold mb-10">Our Team Members</h1>
    <EventCardsRow />
  </div>
);

export default Selection;
