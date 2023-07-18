import { useContext } from 'react';
import EditContext from './context/edit-context';
import Todos from './components/Todos/Todos';
import EditTodo from './components/Todos/EditTodo';

function App() {
  const { isEditing } = useContext(EditContext);
  return (
    <div className="w-screen h-screen grid place-items-center bg-zinc-900">
      {!isEditing ? <Todos /> : <EditTodo />}
    </div>
  );
}

export default App;
