import { useReducer, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Todo } from './components/Todo';
import { todoType } from './types/types';

const todosReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: 3,
          text: action.payload.text,
          date: new Date().toLocaleDateString(),
          isDone: false
        }];
    case "delete":
      return state.filter(oneTodo => oneTodo.id  !== action.payload.id);
    default:
      return state;
  }
};

function App() {

  const [todoList, setTodoList] = useState<todoType[]>([{
    id: 1,
    text: "Learn More JS",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: 2,
    text: "Practice and thinking",
    isDone: false
  }]);

  const [todos, dispatch] = useReducer(todosReducer, []);

  console.log(todos);

  return (
    <div className="App">
      <button type='button' onClick={() =>
        dispatch({
          type: "add",
          payload: {
            text: "Go to walk"
          }
        })}>Add Todo</button>
      <h2>Todo List - TS</h2>
      <Form />
      <Todo todoList={todoList} />
    </div>
  )
}

export default App;
