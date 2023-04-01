/*eslint-disable*/
import TodoItem from '@/components/TodoItem';
import { useTodosContext } from '@/context/TodosContext';
/* eslint-enable */

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};
export default TodosList;
