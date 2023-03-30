import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App'
import store from './app/store';
import Home from './components/Home';
import Movie from './components/Movie';
import './index.css'


const router = createBrowserRouter([

  {
    path : '/movies',
    element : <App/>
  },
  
  {
    path : '/movies/:id',
    element : <Movie/>,
  },
  {
    path : '/',
    element : <Home/>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </>
)
