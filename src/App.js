import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import { onSnapshot, collection, setDoc } from 'firebase/firestore';
// import { auth, db } from './firebase/firebase.utils';
import { checkUserSession } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { fetchCategoriesStart, fetchProductsStart } from './redux/shop/shop.action';

import Header from './components/header/Header.component';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInPage from './pages/sign-in/SignIn.component';
import SignUpPage from './pages/sign-up/SignUp.component';
import ProductsPage from './pages/products-page/ProductsPage.component';

import { selectIsCategoriesLoading, selectIsProductsLoading } from './redux/shop/shop.selectors';
import Loader from './components/Loader/Loader.component';
import ShopTypes from './redux/shop/shop.types';
import CategoryPage from './pages/category-page/CategoryPage.component';

class App extends React.Component {
  unsubscribeUser = null

  componentDidMount() {
    const { checkUserSession, startFetchingProducts, startFetchingCategories } = this.props;
    checkUserSession();
    // startFetchingProducts();
  }

  render() {
    const { user, productsLoading } = this.props;
    return (
      // <Loader isLoading={productsLoading}>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/shop' element={<ShopPage/>} />
            <Route exact path='/signin' 
            element={
              <RequireAuth user={user}>
                <SignInPage />
              </RequireAuth>
            } />
            <Route exact path='/signup' 
            element={
              <RequireAuth user={user}>
                <SignUpPage/>
              </RequireAuth>
            } />
            <Route exact path='/shop/categories/:categoriesId' element={<CategoryPage/>} />
            <Route exact path='/shop/products/:filter' element={<ProductsPage/>} />
          </Routes>
        </div>
      // </Loader>
    );
  }
}

const RequireAuth = ({ user, children }) => {
  if(user !== null) {
    return <Navigate to='/shop'/>
  } else {
    return children;
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  productsLoading: selectIsProductsLoading,
  categoriesLoading: selectIsCategoriesLoading
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  startFetchingProducts: () => dispatch(fetchProductsStart())
  // startFetchingCategories: () => dispatch(fetchCategoriesStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);