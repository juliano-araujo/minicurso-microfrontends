import './styles.css';

interface MapRoute {
  routeName: string;
  routePath: string;
  onClickAction: () => void;
}

interface NavbarProps {
  mapRoutes: MapRoute[];
}

export function Navbar({ mapRoutes }: NavbarProps) {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        {mapRoutes.map((route) => (
          <li key={route.routeName} className="nav-item">
            <a
              className={
                route.routePath === window.location.pathname
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={route.onClickAction}
            >
              {route.routeName}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
