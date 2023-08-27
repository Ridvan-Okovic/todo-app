import { useContext } from 'react';
import EditContext from './context/edit-context';
import Todos from './components/Todos/Todos';
import EditTodo from './components/Todos/EditTodo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TodosPage from './pages/TodosPage';
import TodoDetailsPage from './pages/TodoDetailsPage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import RootTodos from './pages/RootTodos';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    {
      path: 'todos',
      element: <RootTodos />,
      children: [
        {
          path: '',
          element: <TodosPage />,
        },
        {
          path: ':id',
          element: <TodoDetailsPage />,
        },
      ],
    },
    {
      path: 'login',
      element: <LogInPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
