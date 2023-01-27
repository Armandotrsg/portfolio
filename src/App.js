import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams } from 'react-router-dom';
  import { Home } from './components/HomeComponent';


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
