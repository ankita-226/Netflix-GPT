import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import lang from "../utils/languageConstant"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constant"
import { addGptMovieResult } from "../utils/gptSlice"

const GptSearchBar = () =>{
    const dispatch = useDispatch()
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null)

//search movie in tmdb


const searchMovieTMDB = async(movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
 const json = await data.json()
 

    return json.results;

}

    const handleGptSearchClick = async()  =>{
  

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" + searchText.current.value + " . only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar,Sholay, Don, Golmaal, Koi Mil Gaya ";

    //Make an Api call to Gpt API and get movie results 
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery  }],
        model: 'gpt-3.5-turbo',
      });
    //   console.log(gptResults.choices?.[0]?.message?.content);
      //Andaz Apna Apna, Hera Pheri, chupke chupke, jane bhi do, padosan
      const gptMovies = gptResults.choices?.[0].message?.content.split(",")

        //[Andaz Apna Apna, Hera Pheri, chupke chupke, jane bhi do, padosan]
        //for each movie i will search TMDB API

      const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie))
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
    //   console.log(tmdbResults)

          
    }
    return(
        <div className="pt-[40%] md:pt-[15%] flex justify-center ">
<form className="w-full md:w-1/2 bg-black  grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
    <input  ref={searchText} type="text" className="p-4 m-4 col-span-9 rounded-lg" placeholder={lang[langKey].gptSearchPlaceholder}/>
    <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white font-bold rounded-lg" onClick={handleGptSearchClick} >{lang[langKey].search}</button>

</form>

        </div>
    )
}
export default GptSearchBar
