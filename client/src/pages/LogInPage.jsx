import { Link } from 'react-router-dom';

const LogInPage = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="bg-zinc-800 px-8 py-8 shadow-xl rounded">
        <h1 className="text-center text-2xl">Login</h1>
        <form className="w-[30rem] space-y-4" action="">
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="">
              Email
            </label>
            <input
              className="py-[2px] bg-zinc-700 rounded outline-none focus:outline-orange-500 focus:outline-1 pl-4 shadow-lg"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="">
              Password
            </label>
            <input
              className="py-[2px] bg-zinc-700 rounded outline-none focus:outline-orange-500 focus:outline-1 pl-4 shadow-lg"
              type="password"
            />
          </div>
          <button className="w-full bg-orange-500 rounded-md py-[2px]">
            Submit
          </button>
          <p className="text-center">
            Not a member yet?{' '}
            <Link to="/register">
              <span className="text-orange-500 underline">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
