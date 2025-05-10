import { type ComponentType, lazy } from 'react';

interface Route {
  path: string;
  component: ComponentType;
}

export const routes: Route[] = [
  {
    path: '/',
    component: lazy(() => import('../components/pages/home')),
  },
  {
    path: '/detail/:id',
    component: lazy(() => import('../components/pages/detail')),
  },
];
