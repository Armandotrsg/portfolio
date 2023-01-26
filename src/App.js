import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Banner />
        <Skills />
      </div>
    </BrowserRouter>
  );
}

export default App;
