import React from "react";
import { Link } from "react-router-dom";
import IMG_6349 from "../assets/IMG_6349.png";
import Profile from "../assets/profile.jpg";

import Sponsor1 from "../assets/1.jpg";
import Sponsor2 from "../assets/2.jpg";
import Sponsor3 from "../assets/3.jpg";
import Sponsor4 from "../assets/4.jpg";
import Sponsor5 from "../assets/5.jpg";

import Vaibhavi from "../assets/Vaibhavi.jpg";
import Aditya from "../assets/Aditya.jpg";
import Nishant from "../assets/Nishant.jpg";
import Ayesha from "../assets/Ayesha Mulani.jpg";
import Apurva from "../assets/ApurvaJoshi.jpg";

const EventCard = ({ imageUrl, title, p }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <div>
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl}
          style={{
            width: '250px', // Adjust the width as needed
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
    <EventCard imageUrl={Vaibhavi} title="Vaibhavi Hule" p="Team Mentor" />
    <EventCard imageUrl={Ayesha} title="Ayesha Mulani" p="Team Lead" />
    <EventCard imageUrl={Aditya} title="Aditya Patil" p="Team Member" />
    <EventCard imageUrl={Nishant} title="Nishant Gangurde" p="Team Member" />
    <EventCard imageUrl={Apurva} title="Apurva Joshi" p="Team Member" />
  </div>

);

const EventCardSponsor = ({ imageUrl, title }) => (
  <div className="max-w-sm bg-white rounded-lg shadow m-4">
    <div>
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl}
          style={{
            width: '400px', // Adjust the width as needed
            height: '200px', // Adjust the height as needed
          }} />
      </a>
      <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 my-4">{title}</h1>

    </div>

  </div>
);

const EventCardsRowWithCol = () => (
  <div className="flex flex-row items-center">
    <EventCardSponsor imageUrl={Sponsor5} title="Sana Cyber Forensics" />
    <EventCardSponsor imageUrl={Sponsor1} title="POSIT Source" />
    <EventCardSponsor imageUrl={Sponsor2} title="CoreCode Academy" />
    <EventCardSponsor imageUrl={Sponsor3} title="frullato" />
    <EventCardSponsor imageUrl={Sponsor4} title="abcz" />
  </div>
);

// Modified Selection component with Card components
const Selection = () => (
  <div>
    {/* <Card
      imageUrl={Logo}
      title="Logo Quiz 1"
    /> */}

    <h1 className="text-rose-500 text-4xl font-bold text-center py-12">Our Events</h1>

    <div className="flex justify-center items-center">
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
    <h1 className="text-center text-rose-500 text-4xl font-bold mb-10 m-7">Our Team Members</h1>
    <EventCardsRow />

    <div style={{ margin: '100px' }}>
      <h1 className="text-center text-rose-500 text-4xl font-bold mb-10 m-7">Our Sponsors</h1>
      <EventCardsRowWithCol />
    </div>
  </div>
);

export default Selection;
