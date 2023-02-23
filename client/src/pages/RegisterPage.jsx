import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();
    axios.post("/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="mt-4 grow flex justify-center items-center">
      <div className="mt-32">
        <h1 className="text-center text-3xl font-semibold mb-3">Register</h1>
        <form onSubmit={registerUser} className="max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // required
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
          <button className="primary">sign up</button>
          <div className="text-center text-gray-500 py-2">
            Already a member?{" "}
            <Link
              className="underline text-black
            "
              to={"/login"}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
