import { Outlet } from 'react-router-dom';
import TodosPage from './TodosPage';
import Navigation from '../components/Layout/Navigation';

const RootTodos = () => {
  return (
    <>
      <main className="w-screen h-screen overflow-hidden">
        <Navigation />
        <Outlet />
      </main>
    </>
  );
};

export default RootTodos;
