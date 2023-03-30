import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { fetchMovies } from './movieSlice';

const MovieView = ({search ,genre , rating, year, runtime , sort}) => {
    const {loading , error , movies} = useSelector(state => state.data)
    const dispatch =  useDispatch();

    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchMovies())
    } , [])


    const clickHandler = (id) => {
        navigate(`/movies/${id}`)
    }

    if(loading) {

        return <Loader/>
 
    }

    if(error) {
        return <h1>{error}</h1>
    }

    const filteredMovies = movies.filter(m => {
        if(!genre) {
            return true; 
        } else if(m.genre.includes(genre)) {
            return true;
            // m.genre.includes(genre)
        }else {
            return false;
        }
        }).filter(m => {
            if(!rating) {
                return true; 
            } else if(m.ratings >= Number(rating) && m.ratings <= Number(rating) + 1 ) {
                return true;
            }else {
                return false;
            }}).filter(m => {
                if(!year) {
                    return true; 
                } else if(    Number(m.release_date.slice(0,4)) >= Number(year) &&    Number(m.release_date.slice(0,4)) <= (Number(year) +10)) {
                    return true;
                }else {
                    return false;
                }}).filter(m => {
                    if(!runtime) {
                        return true; 
                    } else if( Number(m.runtime) >= Number(runtime) &&    Number(m.runtime) <= (Number(runtime) + 60) ) {
                        return true;
                    }else {
                        return false;
                    }}).filter(m => {
                        console.log("asd");
                        if(!search) {
                            return true;
                        } else if(m.movie_name.toLowerCase().includes(search.toLowerCase()) || m.description.toLowerCase().includes(search.toLowerCase())) {
                            return true;
                        } else {
                            return false;
                        }
                    }).sort((a,b) => {
                        if(sort && sort === 'sort-name'){
                            if (a.movie_name > b.movie_name) {
                                return 1;
                            }
                            if (b.movie_name > a.movie_name) {
                                return -1;
                            }
                            return 0;
                        } else if(sort && sort === 'sort-year') {
                            if (Number(a.release_date.slice(0,4)) > Number(b.release_date.slice(0,4))) {
                                return 1;
                            }
                            if (Number(b.release_date.slice(0,4)) > Number(a.release_date.slice(0,4))) {
                                return -1;
                            }
                            return 0;
                        } else if(sort && sort === 'sort-duration') {
                            if (a.runtime > b.runtime) {
                                return 1;
                            }
                            if (b.runtime > a.runtime) {
                                return -1;
                            }
                            return 0;
                        } else if(sort && sort === 'sort-ratings') {
                            if (a.ratings > b.ratings) {
                                return 1;
                            }
                            if (b.ratings > a.ratings) {
                                return -1;
                            }
                            return 0;
                        }
                    })

  return (

    <div className='flex flex-wrap justify-evenly items-center cursor-pointer'>   

    {filteredMovies.length === 0 ? <h1 className='text-6xl'>No Movies</h1> : filteredMovies.map(movie => <div  onClick={() => clickHandler(movie.id)} key = {movie.id} className='card w-56 h-64 m-2 p-2 bg-black rounded-lg text-white' >
            <img className='w-48 h-48 object-contain' src={`${movie.poster}`} alt="Logo" />
            <p>{movie.movie_name}</p>
            <p>{movie.ratings} <i className='fa fa-star text-yellow-300'  /></p>
        </div>)
    }

    </div>
  )
}

export default MovieView