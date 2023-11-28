import { BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () =>{
    return(
        <>
        <div className="fixed -z-10">
            <img className=" w-screen h-screen object-cover" src={BG_URL}/>
     

        </div>
        <div className="">
        <GptSearchBar/>
     <GptMovieSuggestions/>
        </div>
        
        </>
            
        
    
    )
}

export default GPTSearch;
