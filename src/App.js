import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/home/Home';
import Categories from './routes/categories/Categories';
import Header from './components/header/Header';
import { GlobalState } from './context/GlobalState';
import { initialState, reducer } from './context/reducer'; 
import Cart from './routes/cart/Cart';

function App() {
  return (
    <div className="app">
     <GlobalState>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/check-out' element={<Cart/>}/>
        </Routes>
      </Router>
     </GlobalState>
    </div>
  );
}

export default App;
