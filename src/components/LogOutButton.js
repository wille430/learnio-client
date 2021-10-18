import { UserContext } from "Context/UserContext";
import { useContext } from "react";

const LogOutButton = () => {

    const { logOut } = useContext(UserContext)

    return (
        <button onClick={logOut}>
            Logout
        </button>
    );
}

export default LogOutButton;