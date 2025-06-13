import React from "react";

export default function CalendarSnippet() {
  return (
    <div>
      <div className="w-80 flex flex-col bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">
        {/* <!-- Calendar --> */}
        <div className="p-3 space-y-0.5">
          {/* <!-- Months --> */}
          <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
            {/* <!-- Prev Button --> */}
            <div className="col-span-1">
              <button
                type="button"
                className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                aria-label="Previous"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
            </div>
            {/* <!-- End Prev Button --> */}
            {/* <!-- Month / Year --> */}
            <div className="col-span-3 flex justify-center items-center gap-x-1">
              <div className="relative">
                <select
                  data-hs-select='{
                "placeholder": "Select month",
                "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1",
                "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100",
                "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
              }'
                  className="hidden"
                >
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6" selected>
                    July
                  </option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
              </div>

              <span className="text-gray-800">/</span>

              <div className="relative">
                <select
                  data-hs-select='{
                "placeholder": "Select year",
                "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1",
                "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100",
                "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
              }'
                  className="hidden"
                >
                  <option selected>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </div>
            </div>
            {/* <!-- End Month / Year --> */}
            {/* <!-- Next Button --> */}
            <div className="col-span-1 flex justify-end">
              <button
                type="button"
                className=" size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                aria-label="Next"
              >
                <svg
                  className="shrink-0 size-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            {/* {/* <!-- End Next Button --> */}
          </div>
          {/* {/* <!-- Months --> */}

          {/* <!-- Weeks --> */}
          <div className="flex pb-1.5">
            <span className="m-px w-10 block text-center text-sm text-gray-500">
              Mo
            </span>
            <span className="m-px w-10 block text-center text-sm text-gray-500">
              Tu
            </span>
            <span className="m-px w-10 block text-center text-sm text-gray-500">
              We
            </span>
            <span className="m-px w-10 block text-center text-sm text-gray-500">
              Th
            </span>
            <span className="m-px w-10 block text-center text-sm text-gray-500">
              Fr
            </span>
            <span className="m-px w-10 block text-center text-sm text-gray-500">
              Sa
            </span>
            <span className="m-px w-10 block text-center text-sm text-gray-500">
              Su
            </span>
          </div>
          {/* <!-- Weeks -->

      <!-- Days --> */}
          <div className="flex">
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                disabled
              >
                26
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                disabled
              >
                27
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                disabled
              >
                28
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                disabled
              >
                29
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                disabled
              >
                30
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                1
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                2
              </button>
            </div>
          </div>
          {/* <!-- Days -->

      <!-- Days --> */}
          <div className="flex">
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                3
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                4
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                5
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                6
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                7
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                8
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                9
              </button>
            </div>
          </div>
          {/* <!-- Days -->

      <!-- Days --> */}
          <div className="flex">
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                10
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                11
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                12
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                13
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                14
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                15
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                16
              </button>
            </div>
          </div>
          {/* <!-- Days -->

      <!-- Days --> */}
          <div className="flex">
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                17
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                18
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                19
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center bg-blue-600 border-[1.5px] border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
              >
                20
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                21
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                22
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                23
              </button>
            </div>
          </div>
          {/* <!-- Days --> */}

          {/* <!-- Days --> */}
          <div className="flex">
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                24
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                25
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                26
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                27
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                28
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                29
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                30
              </button>
            </div>
          </div>
          {/* <!-- Days --> */}

          {/* <!-- Days --> */}
          <div className="flex">
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
              >
                31
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                disabled
              >
                1
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                disabled
              >
                2
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                disabled
              >
                3
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                disabled
              >
                4
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                disabled
              >
                5
              </button>
            </div>
            <div>
              <button
                type="button"
                className="m-px size-10 flex justify-center items-center border-[1.5px] border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                disabled
              >
                6
              </button>
            </div>
          </div>
          {/* <!-- Days --> */}
        </div>
      </div>
    </div>
  );
}
