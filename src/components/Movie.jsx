import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';

const Movie = () => {
    const {id} = useParams();

    const [movie , setMovie] = useState({})
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState('');


    useEffect(() =>  {
        setLoading(l => !l)
        async function getMovie(){
            try {
                const data = await axios.get(`http://localhost:3000/movies/${id}`);
                console.log(data);
                if(data.status === 200) {
                    setLoading(l => !l)
                    setMovie(data.data);
                }
                
            } catch (error) {
                setLoading(l => !l)
                console.log(error);
                setError(error.message)
            }
        }
        getMovie();
    }
       
    , [])

    if(loading) {
        return <Loader/>
    }
    if(error) {
        return <p>{error}</p>
    }


  return (
    <div className='h-full' style={{
        backgroundImage: `linear-gradient('to top bottom, black , blue')`
      }}>
    {/* <div>Movie {id}</div>
    <p>{movie.movie_name}</p>
    */}


    <div className="relative h-screen w-full bg-gradient-to-r from-black-500 to-blue-500 object-cover bg-no-repeat bg-cover bg-right bg-fixed"  style={{backgroundImage : 
        `url(${movie.poster})`}}>
        <div className='absolute m-4'>
            <h3 className="text-8xl text-white">{movie.movie_name}</h3>
            <div className=' text-white text-2xl mt-6 flex'>{movie?.cast?.map(c => <p className='mx-3'> {c} </p>)}</div>
            <p className='text-white text-2xl my-4'>{movie.description}</p>
            <p className='text-white my-4 text-2xl'>Director: {movie.director}</p>
            <p className='text-white my-4 text-2xl'>Producer: {movie.producer}</p>
            <div className='text-white my-4 text-2xl flex'>Genre: {movie?.genre?.map(g => <p className='mx-2'>{g}</p> )}</div>
            <p className='text-white my-4 text-2xl'>Length: {(movie.runtime / 60).toFixed(1) }</p>
            <p className='text-white my-4 text-2xl'>Released On: {movie.release_date }</p>
            <p className='text-white my-4 text-2xl'>Ratings: {movie.ratings }</p>
        </div>
    </div>




    </div>

  )
}

export default Movie