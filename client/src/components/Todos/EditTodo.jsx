import { useContext, useState } from 'react';
import EditContext from '../../context/edit-context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditTodo = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { todo } = useContext(EditContext);
  const [editedTodo, setEditedTodo] = useState(todo.name);
  const [completed, setCompleted] = useState(todo.completed);

  const todoChangeHandler = (e) => {
    setEditedTodo(e.target.value);
  };

  const completedChangeHandler = (e) => {
    setCompleted(e.target.checked);
  };

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const newTodo = await axios.patch(
        `${import.meta.env.VITE_API_URI}/${todo.id}`,
        {
          name: editedTodo,
          completed: completed,
        },
        {
          headers: {
            Authorization: `Bearer ` + token,
          },
        }
      );

      navigate('/todos');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[40%] bg-zinc-800 shadow-xl px-[5%] rounded-2xl py-[2%] flex flex-col items-center gap-4">
      <h1 className="text-4xl">Edit Todo</h1>
      <div className="flex gap-2 items-baseline w-full">
        <p>Todo ID:</p>
        <p>{todo.id}</p>
      </div>
      <form onSubmit={updateTodo} className="w-full flex flex-col gap-4">
        <div className="flex gap-2 items-baseline w-full">
          <label>Name:</label>
          <input
            defaultValue={todo.name}
            onChange={todoChangeHandler}
            className="w-full h-8 pl-4 bg-zinc-700 shadow-md focus:outline-orange-500 focus:outline-1 outline-none rounded-md"
            placeholder="To-Do..."
          />
        </div>
        <div className="flex gap-2 items-center w-full">
          <label>Completed:</label>
          <input
            onChange={completedChangeHandler}
            defaultChecked={todo.completed}
            type="checkbox"
            className="w-4 h-4"
          />
        </div>
        <button type="submit" className="bg-orange-500 rounded-md py-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
