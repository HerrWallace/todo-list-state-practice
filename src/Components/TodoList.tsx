import { todoObj } from '../App';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todos: todoObj[];
  removeTodo(id: string): void;
  toggleTodoComplete(id: string): void;
};

export const TodoList = ({
  todos,
  removeTodo,
  toggleTodoComplete,
}: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          todo={todo}
        />
      ))}
    </ul>
  );
};
