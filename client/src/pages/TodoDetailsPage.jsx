import EditTodo from '../components/Todos/EditTodo';

const TodoDetailsPage = () => {
  return (
    <div className="w-full h-[calc(100%-5rem)] grid place-items-center">
      <EditTodo />
    </div>
  );
};

export default TodoDetailsPage;
