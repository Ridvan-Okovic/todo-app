import axios from 'axios';
import { useContext } from 'react';
import EditContext from '../../context/edit-context';
import { FaTrash, FaCheckSquare, FaEdit } from 'react-icons/fa';

const Todo = ({ setTodos, id, name, completed }) => {
  const { setIsEditing, setTodo } = useContext(EditContext);
  let todoClass =
    'flex flex-row items-center justify-between w-full bg-[#3b3b3b] h-10 px-[5%] rounded-md mb-2';

  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await axios.delete(
        `${import.meta.env.VITE_API_URI}/${id}`
      );
      if (deletedTodo.status === 200) {
        const newTodos = await axios.get(import.meta.env.VITE_API_URI);
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
        { name, completed: true }
      );
      if (completedTodo.status === 200) {
        const newTodos = await axios.get(import.meta.env.VITE_API_URI);
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
        <FaEdit
          onClick={() => {
            setIsEditing(true);
            setTodo({ name, id, completed });
          }}
          className="cursor-pointer text-lg opacity-50 hover:opacity-100"
        />

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
