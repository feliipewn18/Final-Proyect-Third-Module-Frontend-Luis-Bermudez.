import { useEffect, useState } from "react"
import { supabase } from "../supabase-client"
import { Navigate, Outlet } from "react-router"

export const ProtectedRoute = () => {
  const [ session, setSession ] = useState(undefined) 

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session }}) => {
      setSession(session)
    })

    const { data: {subscription} } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])
  
  if (session === undefined ) return null

  return session ? <Outlet/> : <Navigate to="/login"/>
    
}
