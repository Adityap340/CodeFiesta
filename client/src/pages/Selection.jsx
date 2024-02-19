import React from "react";
<<<<<<< HEAD
import IMG_6349 from "../assets/IMG_6349.png";
=======
import { Link } from 'react-router-dom';
import IMG_6349 from '../assets/IMG_6349.png';
>>>>>>> 7c802ade7bacdbdbefa85ff1409dc0b7f77a9602

const Selection = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* First Card */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
<<<<<<< HEAD
        <div>
          <a href="#">
            <img className="rounded-t-lg" src={IMG_6349} alt="First Logo" />
          </a>
        </div>
=======
        <Link to="/quiz"> {/* Use Link component to navigate to "/quiz" */}
          <img
            className="rounded-t-lg"
            src={IMG_6349}
            alt="First Logo"
          />
        </Link>
>>>>>>> 7c802ade7bacdbdbefa85ff1409dc0b7f77a9602
        <div className="p-5">
          <Link to="/quiz"> {/* Use Link component to navigate to "/quiz" */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              First Logo Quiz
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
<<<<<<< HEAD
        <a href="#">
          <img className="rounded-t-lg" src={IMG_6349} alt="Second Logo" />
        </a>
=======
        <Link to="/tbt">
          <img
            className="rounded-t-lg"
            src={IMG_6349}
            alt="Second Logo"
          />
        </Link>
>>>>>>> 7c802ade7bacdbdbefa85ff1409dc0b7f77a9602
        <div className="p-5">
          <Link to="/tbt">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Second Logo Quiz
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
  );
};

export default Selection;