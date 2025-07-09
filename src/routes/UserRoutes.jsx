import {  Route, Routes } from "react-router"

import Home from "../components/home/Home"
import EditProfile from "../pages/editProfile/EditProfile"
import MainMyAccount from "../pages/myAccount/MainMyAccount"
import { MainRechargeHistory } from "../pages/rechargeHistory/MainRechargeHistory"



const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/my-account" element= {<MainMyAccount />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/recharge-history" element={<MainRechargeHistory />} />
    </Routes>
  )
}

export default UserRoutes

