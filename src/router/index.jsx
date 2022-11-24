import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { ExplorePage } from '../pages/ExplorePage'
import { DetailPage } from '../pages/DetailPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/explore',
        element: <ExplorePage />,
      },
      {
        path: '/detail/:id',
        element: <DetailPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
])
