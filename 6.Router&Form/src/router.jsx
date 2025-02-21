import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import AdoptionForm from './components/AdoptionForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pets',
    element: <PetList />
  },
  {
    path: '/pets/:id',
    element: <PetDetails />
  },
  {
    path: '/adopt/:id',
    element: <AdoptionForm />
  }
]);

export default router;