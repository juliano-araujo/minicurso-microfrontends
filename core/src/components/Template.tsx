import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '@mp/ds';

interface MapRoute {
  routeName: string;
  routePath: string;
  onClickAction: () => void;
}

export function Template() {
  const navigate = useNavigate();
  const routes: MapRoute[] = [
    {
      routeName: 'Home',
      routePath: '/',
      onClickAction: () => navigate('/'),
    },
    {
      routeName: 'Reports',
      routePath: '/reports',
      onClickAction: () => navigate('/reports'),
    },
  ];

  return (
    <section>
      <Navbar mapRoutes={routes} />
      <Outlet />
    </section>
  );
}
