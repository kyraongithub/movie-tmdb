import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './route';

function App() {
  const renderRoute = (route: (typeof routes)[number], index: number) => {
    const Component = route.component;

    const element = <Component />;
    return <Route key={index} path={route.path} element={element} />;
  };
  return (
    <BrowserRouter>
      <Routes>{routes.map(renderRoute)}</Routes>
    </BrowserRouter>
  );
}

export default App;
