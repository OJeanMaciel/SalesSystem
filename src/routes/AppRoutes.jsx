import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Inventory from "../pages/Inventory/Inventory";
import Orders from "../pages/Orders/Orders";
import User from "../pages/User/User";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/user" element={<User />}></Route>
        </Routes>
    )
}

export default AppRoutes;