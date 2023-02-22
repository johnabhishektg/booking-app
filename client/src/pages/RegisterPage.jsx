import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex justify-center items-center">
      <div className="mt-32">
        <h1 className="text-center text-3xl font-semibold mb-3">Register</h1>
        <form className="max-w-md mx-auto">
          <input type="text" name="name" placeholder="John Doe" required />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button className="primary">sign up</button>
          <div className="text-center text-gray-500 py-2">
            Already a member?{" "}
            <Link
              className="underline text-black
            "
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
