import { useState } from 'react';
import EditContext from './edit-context';
const EditProvider = (props) => {
  const [todo, setTodo] = useState({});
  const editContext = {
    todo,
    setTodo,
  };
  return (
    <EditContext.Provider value={editContext}>
      {props.children}
    </EditContext.Provider>
  );
};

export default EditProvider;
