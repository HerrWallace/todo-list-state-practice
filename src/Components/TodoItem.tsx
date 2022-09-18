import { Todo } from '../store/todoSlice';
import { removeTodo, toggleСomplete } from '../store/todoSlice';
import { useAppDispatch } from './../hooks';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text, completed } = todo;
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleСomplete(id))}
      />
      <span>{text}</span>
      <span className='delete' onClick={() => dispatch(removeTodo(id))}>
        &times;
      </span>
    </li>
  );
};
