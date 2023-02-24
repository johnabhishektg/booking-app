import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="">
      <div className="flex justify-between">
        <a href="/" className="font-bold text-2xl text-primary">
          OYO
        </a>

        <div className="flex align-center p-1 shadow-md shadow-gray gap-3 border border-gray-300 rounded-lg ">
          <div className="ml-2">Anywhere</div>
          <div className=" border-l border-gray-300 "></div>
          <div>Any week</div>
          <div className=" border-l border-gray-300 "></div>
          <div>Add guests</div>
          <button
            className="bg-primary text-white 
       p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        {/* login */}
        <Link
          className="flex gap-2 items-center p-1  border rounded-xl"
          to={user ? "/account" : "/login"}
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <button className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 relative top-1"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          {!!user && (
            <div className="text-xs font-semibold capitalize">{user.name}</div>
          )}
        </Link>
      </div>
    </header>
  );
}
