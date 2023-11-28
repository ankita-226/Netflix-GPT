import {auth} from "../utils/firebase"
import { signOut, onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store =>store.user)
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
   const handleSignOut = () =>{
    

    signOut(auth).then(() => {
        // Sign-out successful.
    

      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
      
   }
   useEffect(()=>{
      
 const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName,photoURL}= user
        
       dispatch
       (addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
       navigate("/browse")

      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
       navigate("/")
      }
    });
    //unsubscribe when component unmount
    return() =>{
      unsubscribe();
    }
    
  },[])

 const handleGptSearchClick = () =>{
  //Toggle Gpt Search button
  dispatch(toggleGptSearchView())
 }

 const handleLanguageChange = (e) =>{
dispatch(changeLanguage(e.target.value))
 }
    return(
        <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between ">
            <img 
            className=" w-44 mx-auto md:mx-0 "
            src={LOGO} alt="logo"/>
           { user && (
           <div className="flex p-2 justify-between">
            
           {showGptSearch &&(<select onChange = {handleLanguageChange}className="bg-gray-900 text-white py-2 px-4 m-4 font-bold rounded-lg" >
              {SUPPORTED_LANGUAGES.map((lang)=> <option value={lang.identifier} key={lang.identifier}>{lang.identifier}</option>)}
            
             
            </select>)}
            <button className=" font-bold text-white p-2 md:p-4  m-3  md:m-4 rounded-lg bg-red-600" onClick ={handleGptSearchClick}>{showGptSearch? "Homepage":"GPT Search"}</button>

            <img className="hidden md:block w-12 h-12 m-4 " alt = "usericon" src= {user.photoURL}/>
            <button className="font-bold text-white p-4" onClick={handleSignOut}>Sign Out</button>
           </div>)}
       
            </div>

    )
}
export default Header