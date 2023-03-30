import React from "react";

const Navbar = ({runtime , sort, genre, rating , search, year, setGenre, setRating, setYear, setRuntime, setSearch , setSort }) => {

  const clickHandler = () => {

    setSort("");
    setGenre("");
    setRating("");
    setYear("");
    setRuntime("");
    setSearch("");
  };


  return (
    <>
    <div className="cursor-pointer flex flex-col  justify-evenly items-center lg:flex-row lg:flex lg:justify-evenly lg:items-center   ">
      <h1 className="text-4xl text-black m-10">Movies App</h1>

      <div className="search mt-6">
        <label htmlFor="search" className="mx-4">
          Search
        </label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          type="text"
          value = {search}
          placeholder="Search"
          className="border-2 border-black p-2 rounded-lg w-3/5"
        />
      </div>

      <div className="genre-select  mt-6">
        <label htmlFor="genre" className="mx-4">
          Genre
        </label>
        <select
          className="border-2 border-black p-2 rounded-lg"
          name="Genre"
          id="genre"
          value = {genre}
          placeholder="Select Genre"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Adventure">Adventure</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Comedy">Comedy</option>
        </select>
      </div>

      <div className="rating-select  mt-6">
        <label htmlFor="rating" className="mx-4">
          Rating
        </label>
        <select
          className="border-2 border-black p-2 rounded-lg"
          name="rating"
          id="rating"
          value={rating}
          placeholder="Select rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select</option>
          <option value="9">9-10</option>
          <option value="8">8-9</option>
          <option value="7">7-8</option>
        </select>
      </div>
    
      <div className="runtime-select  mt-6">
        <label htmlFor="runtime" className="mx-4">
          Runtime
        </label>
        <select
          className="border-2 border-black p-2 rounded-lg"
          name="runtime"
          value={runtime}
          id="runtime"
          placeholder="Select runtime"
          onChange={(e) => setRuntime(e.target.value)}
        >
          <option value="">Select</option>
          <option value="60">1-2</option>
          <option value="120">2-3</option>
          <option value="180">3-4</option>
        </select>
      </div>
      <div className="release-select mt-6">
        <label htmlFor="release" className="mx-4">
          Year 
        </label>
        <select
          onChange={(e) => setYear(e.target.value)}
          className="border-2 border-black p-2 rounded-lg"
          name="year"
          id="year"
          value = {year}
          placeholder="Select Year"
        >
          <option value="">Select</option>
          <option value="1970">1970-1980</option>
          <option value="1980">1980-1990</option>
          <option value="1990">1990-2000</option>
          <option value="2000">2000-2010</option>
          <option value="2010">2010-2020</option>
        </select>
      </div>

    <div className=" mt-6">
      {/* <button className="bg-black text-white p-4 rounded-lg text-xl" >Sort By</button> */}
    
      <select
          onChange={(e) => setSort(e.target.value)}
          className="border-2 border-black p-2 m-2 rounded-lg"
          name="sortBy"
          id="sortBy"  
          placeholder="Sort By" 
          value = {sort}         
        >
          <option value="">Sort By</option>
          <option value="sort-name">Sort by Name</option>
          <option value="sort-year">Sort by Year</option>
          <option value="sort-duration">Sort By Duration</option>
          <option value="sort-ratings">Sort By Ratings</option>
        </select>
  
        </div>
      <button
        onClick={clickHandler}
        className="bg-black text-white px-4 py-2 rounded-lg text-xl mt-6 "
      >
        Reset
      </button>
    </div>
</>
  )

};

export default Navbar;
