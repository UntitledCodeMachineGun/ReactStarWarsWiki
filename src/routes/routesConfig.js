import Characters from '@containers/Characters';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage/';

const routeConfig = [
  {
    path: '/',
    element: <HomePage />
  }, 
  {
    path: '/characters/',
    exact: false,
    element: <Characters />
  },
  {
    path: '/characters/:id',
    element: <PersonPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export default routeConfig;