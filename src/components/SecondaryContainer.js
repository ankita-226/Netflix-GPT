import React from "react"
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  return (
    movies.nowPlayingMovies && (
      <div>
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 bg-black">
     <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
    
     <MovieList title={"Trending"} movies = {movies.TrendingMovies}/>
     <MovieList title={"Popular"} movies = {movies.PopularMovies}/>
     <MovieList title={"TopRated"} movies = {movies.TopRatedMovies}/>
     <MovieList title={"Upcoming Movies"} movies = {movies.UpComingMovies}/>
    
    </div>
      </div>
    )
    
  )
}

export default SecondaryContainer