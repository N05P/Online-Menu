import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import { Provider } from 'react-redux'
import Store from './utils/redux/Store'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart'

const AppLayout = () => {
  return (
    <main className='min-h-screen min-w-screen bg-black/10 p-2'>
      <Provider store={Store}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </Provider>
    </main>
  )
}

const rout = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Hero/>
      },
      {
        path:'/menu',
        element:<Menu/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
]
)

function App(){
  return(
    <RouterProvider router={rout}/>
  )
}

export default App