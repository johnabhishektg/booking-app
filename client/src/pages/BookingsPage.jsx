import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((resp) => {
      setBookings(resp.data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div>
              {booking.checkIn} -&gt; {booking.checkOut}
            </div>
          ))}
      </div>
    </div>
  );
}
