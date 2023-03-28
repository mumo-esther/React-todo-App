/*eslint-disable*/
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
/* eslint-enable */

const TodoApp = () => {
   return (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
);
   };
export default TodoApp;
