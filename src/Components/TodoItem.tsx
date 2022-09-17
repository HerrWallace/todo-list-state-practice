import { todoObj } from '../App';

type TodoItemProps = {
  todo: todoObj;
  removeTodo(id: string): void;
  toggleTodoComplete(id: string): void;
};

export const TodoItem = ({
  todo,
  removeTodo,
  toggleTodoComplete,
}: TodoItemProps) => {
  const { id, text, completed } = todo;
  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className='delete' onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};
