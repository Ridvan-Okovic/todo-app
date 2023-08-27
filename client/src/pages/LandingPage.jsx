import Image from '../assets/todo.svg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center gap-12">
        <img src={Image} alt="logo" className="w-[30rem]" />
        <div className="w-96">
          <h1 className="text-5xl mb-4">
            Todo
            <span className="text-orange-500 font-bold">App</span>
          </h1>
          <p className="text-xl mb-4 text-justify">
            Welcome to the Todo Tracker web app. Here you can create and store
            all your personalized todos in one place.
          </p>
          <p className="text-xl text-justify">
            To get started you can register your account, or if you already have
            an account you can login.{' '}
          </p>
          <div className="w-full flex justify-end">
            <Link to="/login">
              <button className="px-8 py-1 text-lg bg-orange-500 rounded-md shadow-lg mt-4">
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
