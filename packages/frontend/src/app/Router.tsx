import { Chat } from 'pages/Chat';
import { Main } from 'pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router';


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            Component: Main
        },
        {
            path: "chat",
            Component: Chat
        }
    ]) 


    return (
        <RouterProvider router={router} />
    )
}


export default Router;