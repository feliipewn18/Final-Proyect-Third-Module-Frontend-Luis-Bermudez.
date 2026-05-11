import { RouterProvider } from "react-router";
import { Router } from "./router/router";

export function App() {
  return (
    <RouterProvider router={Router}/>
  )
}