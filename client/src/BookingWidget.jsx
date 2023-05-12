import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookThisPlace() {
    console.log("button clicked");
    const response = await axios.post("bookings", {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      place: place._id,
      price: numberOfNights * place.price,
    });

    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white p-4 shadow rounded-2xl">
      <h2 className="text-2xl text-center py-2 font-semibold">
        Price: ₹{place.price} / per night
      </h2>
      <div className="border rounded-2xl mt-4 ">
        <div className="flex">
          <div className=" py-3 px-4 ">
            <label>Check in: </label>
            <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className=" py-3 px-4 border-l">
            <label>Check out: </label>
            <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>
        <div className=" py-3 px-4 border-t">
          <label>Number of guests: </label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 ">
            <label>Your full name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Phone no: </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        )}
      </div>
      <button onClick={() => bookThisPlace()} className="primary mt-4">
        Book now
        {numberOfNights > 0 && (
          <span className="font-bold"> ${numberOfNights * place.price}</span>
        )}
      </button>
    </div>
  );
}
