import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CostumesPage from './pages/CostumesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/costumes" element={<CostumesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
