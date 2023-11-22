import { checkValidateData } from "../utils/validate"
import Header from "./Header"
import {useRef, useState} from "react"
const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState()
    const email = useRef(null)
    const password = useRef(null)
   const toggleSignInForm = () =>{
setIsSignInForm(!isSignInForm)
   }
   const handleButtonClick = () =>{
//validate the form data
 const message = checkValidateData(email.current.value,password.current.value)
 setErrorMessage(message)

   }

    return(
        <div>
            <Header/>
            <div className="absolute w-full h-[100vh]">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
            </div>
            <form  onSubmit = {(e)=>e.preventDefault()} className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
               {!isSignInForm && (<input type="text" placeholder="Name"className="p-4 my-4 w-full rounded-md bg-gray-700" required/>)}
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

