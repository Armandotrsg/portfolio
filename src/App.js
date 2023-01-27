import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './components/HomeComponent';

import { BrowserRouter, Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams } from 'react-router-dom';
  


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
