import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.component';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInPage from './pages/sign-in/SignIn.component';
import SignUpPage from './pages/sign-up/SignUp.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
        <Route exact path='/signin' element={<SignInPage/>} />
        <Route exact path='/signup' element={<SignUpPage/>} />
      </Routes>
    </div>
  );
}

export default App;
