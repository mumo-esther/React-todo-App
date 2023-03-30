/*eslint-disable*/
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

import { TodosProvider } from '@/context/TodosContext';
/* eslint-enable */

const TodosLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodosList />
  </TodosProvider>
);
export default TodosLogic;
