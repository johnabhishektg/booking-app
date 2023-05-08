import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((resp) => {
      setPlace(resp.data);
    });
  }, [id]);

  if (!place) return "";

  if (showAllPhotos) {
    return (
      <div className="absolute bg-black text-white top-0 inset-0 min-h-screen">
        {/* main page */}
        <div className="p-8 grid gap-2 bg-black">
          <button
            onClick={() => setShowAllPhotos(false)}
            className="flex shadow-sm gap-1 fixed top-6 right-9 text-black bg-slate-200 rounded-full px-4 py-2 cursor-pointer hover:bg-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Close photos
          </button>
          <h2 className="text-2xl font-semibold">Photos of {place.title}</h2>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div>
                <div>
                  <img
                    onClick={() => setShowAllPhotos(true)}
                    src={"http://localhost:3000/uploads/" + photo}
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <a
        className="flex gap-1 font-medium underline py-4"
        target="_blank"
        href={"https://maps.google.com/?q=" + place.address}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        {place.address}
      </a>
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
          {place.photos?.[0] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              src={"http://localhost:3000/uploads/" + place.photos[0]}
              className="aspect-square object-cover cursor-pointer"
              alt=""
            />
          )}
          <div className="grid">
            {place.photos?.[1] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                src={"http://localhost:3000/uploads/" + place.photos[1]}
                className="aspect-square object-cover cursor-pointer"
                alt=""
              />
            )}
            <div className="overflow-hidden ">
              {place.photos?.[2] && (
                <img
                  onClick={() => setShowAllPhotos(true)}
                  src={"http://localhost:3000/uploads/" + place.photos[2]}
                  className="aspect-square object-cover cursor-pointer relative top-2"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="flex gap-2 bg-white rounded-lg px-2 py-2 absolute bottom-2 right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            />
          </svg>
          Show more photos
        </button>
      </div>

      <div className="grid grid-cols-1 mb-8 md:grid-cols-[2fr_1fr]  mt-8">
        <div className="mr-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          {place.description}
          <div className="mt-4">
            Check in: {place.checkIn} <br />
            Check out: {place.checkOut} <br />
            Number of guests: {place.maxGuests}
          </div>
        </div>
        <BookingWidget place={place} />
      </div>
      <div className="-mx-8 px-8 py-8 bg-white ">
        <h2 className="text-2xl font-semibold text-black">Extra info </h2>
        <div className="text-gray-500 leading-5 text-sm mt-1 mb-4">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}
