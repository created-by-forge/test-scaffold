import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { HomePage } from '@/pages/home/home-page';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
]);
