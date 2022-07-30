import Characters from '@containers/Characters';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';

const routeConfig = [
  {
    path: '/',
    element: HomePage
  }, 
  {
    path: '/characters',
    element: Characters
  },
  {
    path: '*',
    exact: false,
    element: NotFoundPage
  }
]

export default routeConfig;