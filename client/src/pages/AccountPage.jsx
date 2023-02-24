import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../userContext";

export default function AccountPage() {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return "Loading..";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "px-4 py-2 ";
    if (type === subpage) {
      classes += "bg-primary text-white rounded-full";
    }
    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <nav className="mt-8 mb-6 flex justify-center gap-2">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as <span className=" capitalize ">{user.name} </span> (
          {user.email}) <br />
          <button onClick={logout} className="primary mt-4 max-w-md">
            logout
          </button>
        </div>
      )}
    </div>
  );
}
