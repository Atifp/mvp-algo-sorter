import { Outlet } from "react-router-dom";
import "../index.css"
//import HomeButton from '../buttons/homeButton'
const Layout = () => {
    return(
        <>
            {/*<div className="header">*/}
            {/*    <HomeButton></HomeButton>*/}
            {/*</div>*/}
            <Outlet />
        </>
    )
};
export default Layout;