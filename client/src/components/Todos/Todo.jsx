import axios from 'axios';
import { useContext } from 'react';
import EditContext from '../../context/edit-context';
import { FaTrash, FaCheckSquare, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Todo = ({ setTodos, id, name, completed }) => {
  const token = localStorage.getItem('token');
  const { setIsEditing, setTodo } = useContext(EditContext);
  let todoClass =
    'flex flex-row items-center justify-between w-full bg-zinc-700 h-10 px-[5%] shadow-md rounded-md mb-2';

  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await axios.delete(
        `${import.meta.env.VITE_API_URI}/${id}`,
        {
          headers: {
            Authorization: `Bearer ` + token,
          },
        }
      );
      if (deletedTodo.status === 200) {
        const newTodos = await axios.get(import.meta.env.VITE_API_URI, {
          headers: {
            Authorization: `Bearer ` + token,
          },
        });
        setTodos(newTodos.data.todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCompletedTodo = async () => {
    try {
      const completedTodo = await axios.patch(
        `${import.meta.env.VITE_API_URI}/${id}`,
        { name, completed: true },
        {
          headers: {
            Authorization: `Bearer ` + token,
          },
        }
      );
      if (completedTodo.status === 200) {
        const newTodos = await axios.get(import.meta.env.VITE_API_URI, {
          headers: {
            Authorization: `Bearer ` + token,
          },
        });
        setTodos(newTodos.data.todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (completed) {
    todoClass =
      'flex flex-row items-center justify-between w-full bg-green-500 line-through opacity-75 h-10 px-[5%] rounded-md mb-2';
  }

  return (
    <div className={todoClass}>
      <p>{name}</p>
      <div className="flex flex-row gap-4 items-center justify-basline">
        <Link to={`/todos/${id}`}>
          <FaEdit
            onClick={() => {
              setIsEditing(true);
              setTodo({ name, id, completed });
            }}
            className="cursor-pointer text-lg opacity-50 hover:opacity-100"
          />
        </Link>

        <FaCheckSquare
          onClick={updateCompletedTodo}
          className="cursor-pointer text-lg opacity-50 hover:opacity-100"
        />
        <FaTrash
          className="cursor-pointer text-lg opacity-50 hover:opacity-100"
          onClick={() => {
            deleteTodo(id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
