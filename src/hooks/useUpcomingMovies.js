import { useDispatch,useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
const useUpcomingMovies = () =>{
      //fetch data from tmdb api and update store
  const dispatch = useDispatch()
  const UpComingMovies= useSelector(store=>store.movies.UpComingMovies)

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
    const json = await data.json()
    dispatch(addUpcomingMovies(json.results))
    // console.log(json.results)

  }
  useEffect(()=>{
    !UpComingMovies&&getUpcomingMovies()
  },[])
}

export default useUpcomingMovies;