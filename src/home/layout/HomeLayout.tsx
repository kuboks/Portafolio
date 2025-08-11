import { Outlet } from "react-router"

export function HomeLayout(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Outlet/>
    </div>
  );
    
}