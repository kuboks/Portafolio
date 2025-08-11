import { BrowserRouter, Route, Routes } from "react-router"
import { HomeLayout } from "./home/layout/HomeLayout"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomeLayout/>} />
        </Routes>
    </BrowserRouter>
  )
}