import Characters from '@containers/Characters';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage/';

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
    path: '/characters/:id',
    element: PersonPage
  },
  {
    path: '*',
    exact: false,
    element: NotFoundPage
  }
]

export default routeConfig;