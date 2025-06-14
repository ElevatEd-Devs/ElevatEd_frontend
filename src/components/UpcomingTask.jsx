import React from "react";

export default function UpcomingTask() {
  return (
    <div>
      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span>Individual configuration</span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span>No setup, or hidden fees</span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span>
            Team size:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1 developer
            </span>
          </span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span>
            Premium support:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              6 months
            </span>
          </span>
        </li>
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span>
            Free updates:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              6 months
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}
