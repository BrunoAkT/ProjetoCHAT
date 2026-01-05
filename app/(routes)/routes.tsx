import { useContext } from "react"
import { AuthContext } from "../../context/auth"
import RoutesOpen from "./routesOpen"
import RoutesPrivated from "./routesPrivated"


function Routes(){
    const { user } = useContext(AuthContext)
    return user ? <RoutesPrivated/> : <RoutesOpen/>
}

export default Routes