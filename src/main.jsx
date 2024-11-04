import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/root/Root';
import Error from './assets/components/Error/Error';
import Home from './assets/components/Home/Home';
import DashedBoard from './assets/components/Dashed Board/DashedBoard';
import BookDetails from './assets/components/Book Details/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path:'/dashboard',
        element:<DashedBoard></DashedBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
