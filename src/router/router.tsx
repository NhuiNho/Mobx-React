import { Route, Routes } from "react-router-dom"
import TodoApp from "../Pages/Todo/TodoApp"
import MasterLayout from "../Pages/theme/masterLayout"
import Login from "../auth/login/login"
import Register1 from "../auth/register1/register1"
import { ROUTERS } from "../utils/router"


export const renderRouter = () => {
     const routers = [
          {
               path: ROUTERS.TODO,
               component: <TodoApp />
          },
          {
               path: ROUTERS.LOGIN,
               component: <Login />
          },
          {
               path: ROUTERS.REGISTER,
               component: <Register1 />
          },
     ]

     return (
          <MasterLayout>
               <Routes>
                    {routers.map((item, key) => (
                         <Route key={key} path={item.path} element={item.component}></Route>
                    ))}
               </Routes>
          </MasterLayout>
     )
}