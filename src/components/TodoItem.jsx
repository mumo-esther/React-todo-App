import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, setTodos, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => {
        setTodos((prevState) => prevState.map((todo) => {
          if (todo.id === itemProp.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }));
      }}
    />
    <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
