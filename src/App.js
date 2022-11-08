import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/PublicRoutes/Routes';

function App() {
  return (
    <div className='bg-current'>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
