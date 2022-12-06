import { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  return (
    <nav>
      <Link to='/'>Домой</Link>
      <Link to='/recipes'>Рецепты</Link>
    </nav>
  )
}

export default Navbar
