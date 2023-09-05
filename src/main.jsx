import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import NewClient, { action as newClientAction } from './pages/NewClient.jsx'
import Index, { loader as clientLoader, loader } from './pages/Index.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import EditClient, { loader as EditClientLoader} from './pages/EditClient.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction
      },
      {
        path: '/clients/:clientId/edit',
        element: <EditClient />,
        loader: EditClientLoader,
        errorElement: <ErrorPage/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
