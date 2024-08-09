import './App.css';
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Daaru from './Components/Daaru'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/daaru">
      <button>
        Click here to go to this page
      </button>
      </Link>
      <Link to="/">
      <button>
        Click here to go back to this page
      </button>
      </Link>
    </div>

      <Routes>
        <Route path='/daaru' element={<Daaru />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
