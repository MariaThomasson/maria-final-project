import React from 'react'
import styled from 'styled-components/macro'
import { Provider } from 'react-redux'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
//import { cart } from 'reducers/cart'//
//import { user } from 'reducers/user'//
//import { Login } from 'pages/Login'//
//import { Signup } from 'pages/Signup'//
//import { ProfilePage } from 'pages/ProfilePage'//
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
//import { LandingPage } from 'pages/LandingPage'//
import { ProductPage } from 'pages/ProductPage'
//import { ProductDetails } from 'pages/ProductDetails'//
import { Footer } from 'components/Footer'
//import { CartPage } from 'pages/CartPage'//
//import { OrderConfirmation } from 'pages/OrderConfirmation'//
//import { UserUpload } from 'pages/UserUpload'//
//import { Market } from 'pages/Market'//
import { About } from 'pages/About'
import { ui } from 'reducers/ui'
import { LandingPage } from 'pages/LandingPage'
import NotFound from 'components/NotFound'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const savetoLocal = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('finalProjectState', serializedState)
  } catch (err) {
    throw new Error('Could not save to local storage.')
  }
}

const loadFromLocal = () => {
  try {
    const serializedState = localStorage.getItem('finalProjectState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    throw new Error('Could not load from local storage.')
  }
}

const reducer = combineReducers({
 //cart: cart.reducer,//
 //user: user.reducer,//
  ui: ui.reducer,
})

const persistedState = loadFromLocal()
const store = createStore(
  reducer,
  persistedState,
  enhancer(applyMiddleware(thunk))
)
store.subscribe(() => savetoLocal(store.getState()))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const MainContent = styled.div`
  flex: 1;
`

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <MainContent>
            <Routes>
              <Route exact path="/" element={<ProductPage />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/main" element={<LandingPage />} />
              <Route exact path="/notfound" element={<NotFound />} />
              </Routes>
          </MainContent>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  )
}
