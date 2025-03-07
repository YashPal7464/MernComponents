import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add": return [...state, action.payload];
    case "remove": return state.filter((_, index) => index !== action.payload);
    default: return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch({ type: "add", payload: input })}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => dispatch({ type: "remove", payload: index })}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
