import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () =>{
    const navigate = useNavigate()
    const user = useSelector(store =>store.user)
   const handleSignOut = () =>{
    

    signOut(auth).then(() => {
        // Sign-out successful.
    navigate("/")

      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
      
   }
    return(
        <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
            <img 
            className="w-44"
            src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="logo"/>
           { user && (<div className="flex p-2">
            <img className="w-12 h-12 " alt = "usericon" src= {user.photoURL}/>
            <button className="font-bold text-white p-4" onClick={handleSignOut}>Sign Out</button>
           </div>)}
       
            </div>

    )
}
export default Header