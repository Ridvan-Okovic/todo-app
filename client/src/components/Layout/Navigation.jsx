import Image from '../../assets/todo.svg';
import { useNavigate, Link } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const logoutHandler = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <header className="w-screen h-20 shadow-xl">
      <nav className="px-10 h-full w-full flex items-center justify-between">
        <Link to="/todos">
          <img src={Image} alt="logo" className="w-12" />
        </Link>
        <ul className="flex items-center justify-center gap-8">
          <li>
            <p className="text-xl">
              Hello, <span className=" text-orange-500">{username}</span>
            </p>
          </li>
          <li>
            <button
              onClick={logoutHandler}
              className="bg-orange-500 rounded px-4 py-1"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
