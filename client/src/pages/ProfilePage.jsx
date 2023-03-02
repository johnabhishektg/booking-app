import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { UserContext } from "../userContext";
import PlacesPage from "./PlacesPage";

export default function ProfilePage() {
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

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as <span className=" capitalize ">{user.name} </span> (
          {user.email}) <br />
          <button onClick={logout} className="primary mt-4 max-w-md">
            logout
          </button>
        </div>
      )}

      {subpage === "places" && (
        <div>
          <PlacesPage />
        </div>
      )}
    </div>
  );
}
