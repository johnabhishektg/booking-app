import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4 grow flex justify-center items-center">
      <div className="mt-32">
        <h1 className="text-center text-3xl font-semibold mb-3">Login</h1>
        <form className="max-w-md mx-auto">
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
