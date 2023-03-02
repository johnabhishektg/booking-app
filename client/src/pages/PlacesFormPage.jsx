import PhotoUploader from "../PhotoUploader";
import Perks from "../Perks";
import { useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate } from "react-router-dom";

export default function PlacesFormPage() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);

  function inputHeader(text) {
    return <h2 className="text-2xl text-semibold mt-4 text-black">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-sm text-gray-500">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(e) {
    e.preventDefault();
    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewPlace}>
        {preInput("Title", " Title for your place, should be short and catchy")}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title, for ex: My lovely apt"
        />

        {preInput("Address", "Address to this place")}
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />

        {preInput("Photos", "more = better")}
        <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {preInput("Description", "description of the place")}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {preInput("Perks", "select all the perks of your place")}
        <Perks selected={perks} onChange={setPerks} />

        {preInput("Extra Info", "house rules, etc")}
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />

        {preInput(
          "Check in & out time",
          "add check in and check out time with maximum number of guests"
        )}
        <div className="grid grid-cols-3 gap-2 ">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input
              type="text"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="14"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input
              type="text"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="11"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max guests</h3>
            <input
              type="text"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>
        </div>
        <div className="my-3">
          <button className="primary ">Save</button>
        </div>
      </form>
    </div>
  );
}
