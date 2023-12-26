import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './LayOut/MainLayOut';
import Home from './Component/Home';
import Courses from './Component/Courses';
import AboutUs from './Component/AboutUs';
import Admission from './Component/Admission';
import Class6 from './Classes/Class6';
import Class3to5 from './Classes/Class3to5';
import Class8 from './Classes/Class8';
import Class9 from './Classes/Class9';
import Class7 from './Classes/Class7';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache()
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Courses />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/class3to5",
        element: <Class3to5 />,
      },
      {
        path: "/class6",
        element: <Class6 />,
      },
      {
        path: "/class7",
        element: <Class7 />,
      },
      {
        path: "/class8",
        element: <Class8 />,
      },
      {
        path: "/class9",
        element: <Class9 />,
      },
      {
        path: "/SignIn",
        element: <SignIn/>
      },
      {
        path: "/SignUp",
        element: <SignUp/>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
