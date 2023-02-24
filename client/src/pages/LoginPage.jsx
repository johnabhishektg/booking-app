import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../userContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email: email,
        password: password,
      });
      setUser(data);
      alert("Login sucessful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex justify-center items-center">
      <div className="mt-32">
        <h1 className="text-center text-3xl font-semibold mb-3">Login</h1>
        <form onSubmit={handleLogin} className="max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //required
          />
          <button className="primary">login</button>
          <div className="text-center text-gray-500 py-2">
            Don't have an account yet?{" "}
            <Link
              className="underline text-black
            "
              to={"/register"}
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
