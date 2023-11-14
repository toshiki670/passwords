import { useRoutes, Navigate, Outlet } from 'react-router-dom';

import { Landing } from '@/features/misc';

import { MainLayout } from '@/components/Layout';

import { Dashboard } from '@/features/misc';
import { XRoutes } from '@/features/x';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/x', element: <XRoutes /> },
        { path: '/', element: <Dashboard /> },
        { path: '*', element: <Navigate to="." /> },
      ],
    },
  ]);

  return <>{element}</>;
};