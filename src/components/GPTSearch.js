import { BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () =>{
    return(
        <div>
            <div className="absolute -z-10">
            <img src={BG_URL}/>
     

        </div>
        <GptSearchBar/>
     <GptMovieSuggestions/>
        </div>
    )
}

export default GPTSearch;
