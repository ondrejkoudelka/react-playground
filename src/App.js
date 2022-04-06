import logo from './logo.svg'
//import './App.css';
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <AppRoutes />
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default App
