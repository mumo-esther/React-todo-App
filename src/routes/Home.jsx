/*eslint-disable*/
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
/* eslint-enable */

const Home = () => (
  // <div className="wrapper"> remove the div
  <div className="todos">
    <Header>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </Header>
    <TodosLogic />
  </div>
  // </div>
);
export default Home;
