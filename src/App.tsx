import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import RecipesPage from './components/RecipesPage'
import './/index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/recipes' element={<RecipesPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
