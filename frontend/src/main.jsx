import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import FAQPage from './pages/FAQPage/index.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,    
    },
    {
        path: '/faq',
        element: <FAQPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      
                        <div>
                            <RouterProvider router={router} />
                        </div>
                
    </StrictMode>
)
