import './App.css'
import MovieView from './features/movie/MovieView'
import Navbar from './components/Navbar'
import { useState } from 'react';


function App() {
  const [genre,setGenre] = useState("");
  const [rating,setRating] = useState("");
  const [runtime,setRuntime] = useState("");
  const [year,setYear] = useState("");
  const [search, setSearch] = useState("");
  const [sort , setSort] = useState("");

  return (
    <div className="App">

      <Navbar runtime={runtime} sort ={sort} search = {search} genre = {genre}  year = {year} rating = {rating} setSearch = {setSearch} setGenre = {setGenre}  setRating = {setRating}  setRuntime = {setRuntime} setYear = {setYear} setSort = {setSort} />
      <MovieView runtime={runtime} sort ={sort} search = {search} genre = {genre}  year = {year} rating = {rating}  />

    </div>  
  )
}

export default App
