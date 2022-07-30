import { Routes, Route } from 'react-router-dom';

import Characters from '@containers/Characters';
import HomePage from '@containers/HomePage';
import routeConfig from '@routes/routesConfig';
import Header from '@components/Header';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routeConfig.map((route, index) => (
            <Route
            key={index}
            path={route.path}
            element={route.element()}
            />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App;