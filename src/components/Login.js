import { checkValidateData } from "../utils/validate"
import Header from "./Header"
import {useRef, useState} from "react"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";

import {auth} from "../utils/firebase"
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BG_URL } from "../utils/constant";
const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState()
    
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
   const toggleSignInForm = () =>{
setIsSignInForm(!isSignInForm)
   }
   const handleButtonClick = () =>{
//validate the form data
 const message = checkValidateData(email.current.value,password.current.value)
 setErrorMessage(message)
if(message) return;

if(!isSignInForm){
//signup
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
       photoURL: AVATAR_URL
    }).then(() => {
      
      const {uid, email, displayName,photoURL}= auth.currentUser
          
      dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+errorMessage)
  });


}
else{
// sign in 
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
});

}
   }

    return(
        <div>
            <Header/>
            <div className="absolute w-full h-[100vh]">
                <img src={BG_URL}/>
            </div>
            <form  onSubmit = {(e)=>e.preventDefault()} className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
               {!isSignInForm && (<input ref={name}  type="text" placeholder="Name"className="p-4 my-4 w-full rounded-md bg-gray-700" required/>)}
                <input ref={email} type="email" placeholder="Email Address"className="p-4 my-4 w-full rounded-md bg-gray-700"required/>
                <input  ref={password} type="password" placeholder="Password"className="p-4 my-4 w-full rounded-md bg-gray-700"required/>
                <p className="font-bold text-red-500  text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick ={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="text-xl py-4 cursor-pointer"onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
            </form>
            </div>
    )
}

export default Login;

