import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces([...data]);
    });
  }, []);
  return (
    <div className="mt-12 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id}>
            <div className="cursor-pointer bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
                <img
                  className="rounded-2xl aspect-square object-cover"
                  src={"http://localhost:3000/uploads/" + place.photos[0]}
                  alt=""
                />
              )}
            </div>
            <h2 className="font-semibold leading-5">{place.address}</h2>
            <h3 className="text-sm truncate text-gray-500">{place.title}</h3>
            <div className="mt-1">
              <span className="font-semibold">₹{place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
}
