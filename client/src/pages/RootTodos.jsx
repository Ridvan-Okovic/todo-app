import { Outlet } from 'react-router-dom';
import TodosPage from './TodosPage';

const RootTodos = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootTodos;
