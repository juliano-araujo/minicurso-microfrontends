import { useEffect, useState } from 'react';

interface Todo {
  id: string;
  describe: string;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    window.addEventListener('@mp/core/addNewTodo', (event: CustomEvent) => {
      setTodos((oldTodos) => [...oldTodos, event.detail]);
    });
  }, []);

  return (
    <div className="my-4">
      <h3 className="my-2">List Parcel</h3>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th>Todo</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, i) => (
              <tr key={todo.id}>
                <td scope="col">{i + 1}</td>
                <td>{todo.describe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
