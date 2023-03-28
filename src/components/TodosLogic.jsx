/*eslint-disable*/
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
import { useState } from 'react';
/* eslint-enable */

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} setTodos={setTodos} />
      <TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo} />
    </div>
  );
};

export default TodosLogic;
