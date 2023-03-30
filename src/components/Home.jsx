import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/movies')}  className='text-white text-4xl bg-black m-4 p-3 rounded-lg'>Go To App</button>
  )
}

export default Home