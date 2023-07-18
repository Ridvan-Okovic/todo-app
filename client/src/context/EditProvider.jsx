import { useState } from 'react';
import EditContext from './edit-context';
const EditProvider = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState({});
  const editContext = {
    todo,
    setTodo,
    isEditing,
    setIsEditing,
  };
  return (
    <EditContext.Provider value={editContext}>
      {props.children}
    </EditContext.Provider>
  );
};

export default EditProvider;
