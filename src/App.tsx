import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Nabvar from './components/Navbar'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
