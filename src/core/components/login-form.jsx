import { Lock, Mail, User, UserStar } from "lucide-react"
import { supabase } from "../supabase-client"

export function Login () {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin}
    })
  }

  return (
  <div className="w-full min-h-screen bg-gray-700 flex justify-center items-center">
   <div className={`bg-black flex flex-col gap-4 rounded-lg relative items-center max-w-110 max-h-120 justify-center p-10`}> 

      <div className="absolute bottom-108 bg-black p-5 rounded-full text-white">
      <User className="w-13 h-13"/>
      </div>

      <div>
        <h2 className="text-3xl text-white">Welcome Again!</h2>
      </div>

     <div className="flex flex-col gap-4"> 
      <div className="flex flex-col gap-1">

      <p className="text-white">Email Address</p>
      <div className="flex gap-1 items-center bg-gray-800 text-white px-2 py-1 rounded-lg"> 
      <Mail />
      <label/>
      <input className="py-1 px-3" type="text" id="email" placeholder="Email Address"/>
      </div>
      </div>
      
      <div className="flex flex-col gap-1">

      <p className="text-white">Password</p>
      <div className="flex gap-2 items-center bg-gray-800 text-white px-2 py-1 rounded-lg">
      <Lock />
      <input className="py-1 px-3" type="text" id="password" placeholder="Password"/>
      </div>
      </div>

      <div className="flex justify-center items-center bg-red-900  text-white rounded-2xl transition-transform duration-200 hover:-translate-y-1 hover:border hover:border-gray-200">
        <UserStar />
      <button className=" bg-red-900 px-5 py-3 cursor-pointer" onClick={handleLogin}>Login with Google</button>
      </div>

    </div>

    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input type="checkbox" className="cursor-pointer" />
        <p className="text-white">Remember me</p>
      </div>
      <div className="flex">
        <p className="text-sm cursor-pointer text-blue-700">Forgot Password?</p>
      </div>
    </div>

    <div className="w-full flex justify-center">
      <button className="cursor-pointer bg-white w-full py-2 px-20 text-black font-medium text-xl hover:text-white hover:bg-black rounded-lg transition-transform duration-200 hover:-translate-y-0.5 hover:border hover:border-gray-200">
        LOGIN
      </button>
    </div>

  </div>
  </div>
  
  )
}
