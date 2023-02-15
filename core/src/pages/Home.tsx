import { FormEvent, useState } from 'react';
import Parcel from 'single-spa-react/parcel';
import { v4 as uuid } from 'uuid';

export function Home() {
  const [todo, setTodo] = useState('');

  function handleSumbit(event: FormEvent) {
    event.preventDefault();

    dispatchEvent(
      new CustomEvent('@mp/core/addNewTodo', {
        detail: {
          id: uuid(),
          describe: todo,
        },
      })
    );

    setTodo('');
  }

  return (
    <section className="container">
      <h3>Home page</h3>

      <form className="row" onSubmit={handleSumbit}>
        <div className="col-auto">
          <label htmlFor="addNewTodo" className="col-form-label">
            New Todo
          </label>
        </div>

        <div className="col-auto">
          <input
            id="addNewTodo"
            type="text"
            className="form-control"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </div>

        <div className="col-auto">
          <button className="btn btn-success mx-2" type="submit">
            Add
          </button>
        </div>
      </form>

      <Parcel config={() => System.import('@mp/list') as any}></Parcel>
    </section>
  );
}
