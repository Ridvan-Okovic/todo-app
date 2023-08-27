import axios from 'axios';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  console.log(name.current.value);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        `http://localhost:3001/api/v1/auth/register`,
        {
          name: 'Ricko',
          email: 'ricko@gmail.com',
          password: 'secret',
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="bg-zinc-800 px-8 py-8 shadow-xl rounded">
        <h1 className="text-center text-2xl">Register</h1>
        <form
          className="w-[30rem] space-y-4"
          action=""
          onSubmit={submitHandler}
        >
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="">
              Name
            </label>
            <input
              ref={name}
              className="py-[2px] bg-zinc-700 rounded outline-none focus:outline-orange-500 focus:outline-1 pl-4 shadow-lg"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="">
              Email
            </label>
            <input
              ref={email}
              className="py-[2px] bg-zinc-700 rounded outline-none focus:outline-orange-500 focus:outline-1 pl-4 shadow-lg"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="">
              Password
            </label>
            <input
              ref={password}
              className="py-[2px] bg-zinc-700 rounded outline-none focus:outline-orange-500 focus:outline-1 pl-4 shadow-lg"
              type="password"
            />
          </div>
          <button className="w-full bg-orange-500 rounded-md py-[2px]">
            Submit
          </button>
          <p className="text-center">
            Already a member?{' '}
            <Link to="/login">
              <span className="text-orange-500 underline">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
