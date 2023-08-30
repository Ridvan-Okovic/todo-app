import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const user = await axios.post(
        `http://localhost:3001/api/v1/auth/register`,
        {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        }
      );

      if (user.status === 201) {
        localStorage.setItem('token', user.data.token);
        localStorage.setItem('username', user.data.user.name);
        setIsLoading(false);
        navigate('/todos');
      }
    } catch (error) {
      setIsLoading(false);
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
            {loading ? 'Creating user...' : 'Submit'}
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
