import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
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
            onChange={(e) => setNumberOfGuests(e.target.value)}
          />
        </div>
      </div>
      <button className="primary mt-4">
        Book now
        {numberOfNights > 0 && <span>${numberOfNights * place.price}</span>}
      </button>
    </div>
  );
}
