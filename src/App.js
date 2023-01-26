import './App.css';
import { NavBar } from './components/NavBar';
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
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
