import React from "react";

const Card = ({ courseImageUrl, courseName, courseDescription }) => {
  return (
    <div id="card" className="flex-row">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={
              courseImageUrl
                ? courseImageUrl
                : "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
            }
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {courseName ? courseName : "Course__Name"}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {courseDescription ? courseDescription : "Course__Description"}
          </p>
          <a
            href="/CoursePage"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Course
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
          </a>
        </div>
      </div>

      {/* Card Title 
        Card IMG 
        Card Icon */}
    </div>
  );
};

export default Card;
