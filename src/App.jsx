import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'
function App() {


  return (
    <>
      
        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
    </>
  )
}

export default App
