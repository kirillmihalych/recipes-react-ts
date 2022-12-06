import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import RecipesPage from './components/RecipesPage'
import SingleRecipePage from './components/SingleRecipePage'
import './/index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/recipes' element={<RecipesPage />}></Route>
        <Route path='/recipes/:id' element={<SingleRecipePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
