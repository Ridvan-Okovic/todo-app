import React from 'react';

const EditContext = React.createContext({
  todo: {},
  setTodo: () => {},
  isEditing: Boolean,
  setIsEditing: () => {},
});

export default EditContext;
