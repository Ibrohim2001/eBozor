import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './routes/home/Home';
import Categories from './routes/categories/Categories';
import Header from './components/header/Header';
import { GlobalState } from './context/GlobalState';
import Cart from './routes/cart/Cart';
import ProductPage from './routes/productpage/ProductPage';
import Signup from './routes/singup/Signup';
import Login from './routes/login/Login';

function App() {
  const location = useLocation();
  return (
    <div className="app">
     <GlobalState>
        {
          location.pathname === '/login' || location.pathname === '/sign-up' ? <></> : <Header/>
        }
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/check-out' element={<Cart/>}/>
          <Route path='/products/:id' element={<ProductPage/>} />
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
     </GlobalState>
    </div>
  );
}

export default App;
