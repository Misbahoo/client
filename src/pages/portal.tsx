import { Link } from "react-router-dom";

const Portal = () => {
  return (
    <>
      <div className="bg-green-300 py-[5rem]">
        <h2 className="w-1/4 mx-auto mb-5 text-green-900 font-bold uppercase">
          Login to your Account
        </h2>
        <form className="flex flex-col gap-2 w-1/4 mx-auto bg-green-600 py-5 rounded-md shadow-lg">
          <label htmlFor="email" className="w-3/4 mx-auto text-white">
            E-mail Address
          </label>
          <input
            className="input w-3/4"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <label htmlFor="password" className="w-3/4 mx-auto text-white">
            Password
          </label>
          <input
            className="input w-3/4"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="btn bg-green-400 w-2/4 mx-auto mt-5">
            Submit
          </button>

          <div className="w-3/4 mx-auto mt-5">
            <p className="text-white text-center">New User? </p>
            <Link
              to="/register"
              className="text-white mx-auto block w-2/4 text-center"
            >
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Portal;
