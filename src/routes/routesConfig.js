import Characters from '@containers/Characters';
import HomePage from '@containers/HomePage';

const routeConfig = [
  {
    path: '/',
    element: HomePage
  }, 
  {
    path: '/characters',
    element: Characters
  }
]

export default routeConfig;