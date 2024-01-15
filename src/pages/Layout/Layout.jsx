import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Outlet, Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { CiCirclePlus, CiPlane } from "react-icons/ci";

const Layout = () => {

    const handleLogOut = () => {
        window.localStorage.removeItem('token');

    }
    return (
        <>
            <List role='menubar' variant="soft" >
                <List orientation="horizontal" size='lg' >
                    <ListItem sx={{ width: 1 / 3, justifyContent: "center" }}>
                        <IoIosLogOut />
                        <Link to="/login" onClick={handleLogOut}>Log out</Link>
                    </ListItem>
                    <ListItem sx={{ width: 1 / 3, justifyContent: "center" }}>
                        <CiCirclePlus />
                        <Link to="create-travel">Create Travel</Link>
                    </ListItem>
                    <ListItem sx={{ width: 1 / 3, justifyContent: "center" }}>
                        <CiPlane />
                        <Link to="/">My travels</Link>
                    </ListItem>
                </List>
            </List>

            <Outlet />
        </>
    )
};

export default Layout;