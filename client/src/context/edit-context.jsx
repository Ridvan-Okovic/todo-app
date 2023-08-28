import React from 'react';

const EditContext = React.createContext({
  todo: {},
  setTodo: () => {},
});

export default EditContext;
