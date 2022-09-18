import { useState } from 'react';
import { useAppDispatch } from './hooks';

import { addTodo } from './store/todoSlice';
import { InputField } from './Components/InputField';
import { TodoList } from './Components/TodoList';

import './App.css';

const App = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div className='App'>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
};

export default App;
