import "./styles.css"

export function Navbar() {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active">Rota 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Rota 2</a>
        </li>
      </ul>
    </header>
  );
}
