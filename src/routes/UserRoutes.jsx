import { createBrowserRouter } from "react-router"

import Home from "../components/home/Home"
import EditProfile from "../pages/editProfile/EditProfile"
import MainMyAccount from "../pages/myAccount/MainMyAccount"
import { MainRechargeHistory } from "../pages/rechargeHistory/MainRechargeHistory"

const userRouter = createBrowserRouter(
  [
    {
      path: '/', element: <Home />
    },
    {
      path: '/my-account', element: <MainMyAccount />
    },
    {
      path: '/edit-profile', element: <EditProfile />
    },
    {
      path: '/recharge-history', element: <MainRechargeHistory />
    }
  ]
)
export default userRouter
