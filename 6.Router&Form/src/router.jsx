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


{/* <BrowserRouter>
<Routes>
  <Route index path="/" element={<App />} />
  <Route path="/pets" element={<PetList />} />
  <Route path="/pets/:id" element={<PetDetail />} />
  <Route path="/adopt/:id" element={<AdoptionForm />} />
  <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter> */}



export default router;