import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import AdoptionForm from './components/AdoptionForm';
import ErrorPage from './components/ErrorPage';

const API_URL = 'https://pets-api-ac6f.onrender.com/pets';

// Loader functions
const petsLoader = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch pets');
  }
  return response.json();
};

const petDetailsLoader = async ({ params }) => {
  const response = await fetch(`${API_URL}/${params.id}`);
  if (!response.ok) {
    throw new Error('Pet not found');
  }
  return response.json();
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: petsLoader,
  },
  {
    path: '/pets',
    element: <PetList />,
    loader: petsLoader,
  },
  {
    path: '/pets/:id',
    element: <PetDetails />,
    loader: petDetailsLoader,
  },
  {
    path: '/adopt/:id',
    element: <AdoptionForm />,
    loader: petDetailsLoader,
  }
]);

export default router;