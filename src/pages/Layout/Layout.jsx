import { Outlet, Link } from "react-router-dom";

const Layout = () => {

    const handleLogOut = () => {
        window.localStorage.removeItem('token');

    }
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/login" onClick={handleLogOut}>Log out</Link>
                    </li>
                    <li>
                        <Link to="create-travel">Create Travel</Link>
                    </li>
                    <li>
                        <Link to="travel-page">My travels</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;