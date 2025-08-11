import { BrowserRouter, Route, Routes } from "react-router"
import { HomeLayout } from "./home/layout/HomeLayout"
import { HomePages } from "./home/pages/HomePage"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/portafolio" element={<HomeLayout/>}>
              <Route index element={<HomePages/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}