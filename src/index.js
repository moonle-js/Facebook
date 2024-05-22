import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import './style.css'
import Default from "./Components/Default";
import Posts from "./Components/Posts";
import PostDetailed from "./Components/PostDetailed";

const root = ReactDOM.createRoot(document.querySelector('#root'))

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Default></Default>,
            children: [
                {
                    index: true,
                    element: <Posts></Posts>
                },
                {
                    path: 'post',
                    element: <PostDetailed></PostDetailed>
                }
            ]
        }
    ],
    {
        basename: process.env.PUBLIC_URL
    }
)

root.render(
    <RouterProvider router={router}>

    </RouterProvider>
)