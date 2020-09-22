import { useContext } from "react"
import AuthContext from "../auth/context";
import authStorage from '../auth/storage';
import jwtDecode from 'jwt-decode';

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    }

    const login = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    }

    return {
        user,
        setUser,
        login,
        logout
    };
}