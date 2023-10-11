import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/create-travel">Create Travel</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li><li>
                        <Link to="/travel-page">My travels</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;