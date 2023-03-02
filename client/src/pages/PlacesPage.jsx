import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex bg-primary px-4 py-2 text-white rounded-full"
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div>
        {places.length > 0 &&
          places.map((place) => (
            <div className="mt-4">
              <h2>{place.title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}
