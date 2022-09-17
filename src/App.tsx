import { useState } from 'react';
import './App.css';
import { InputField } from './Components/InputField';
import { TodoList } from './Components/TodoList';

export type todoObj = {
  id: string;
  text: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<todoObj[]>([]);
  const [text, setText] = useState<string>('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText('');
  };

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className='App'>
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />

      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
