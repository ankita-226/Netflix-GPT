import { useDispatch ,useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addTrendingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
const useTrendingMovies = () =>{
      //fetch data from tmdb api and update store
  const dispatch = useDispatch()
  const TrendingMovies= useSelector(store=>store.movies.TrendingMovies)

  const getTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/week?',API_OPTIONS)
    const json = await data.json()
    dispatch(addTrendingMovies(json.results))
    // console.log(json.results)

  }
  useEffect(()=>{
    !TrendingMovies && getTrendingMovies()
  },[])
}

export default useTrendingMovies;