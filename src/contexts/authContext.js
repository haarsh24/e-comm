import { createContext,useContext ,useReducer} from "react";   
import { authReducer } from "../reducer/authReducer";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const { firstName } = JSON.parse(localStorage.getItem('userData')) || { firstName: "" }
    // let tokenDetails = localStorage.getItem("token") || { token: '' }
const [authState, authDispatch] = useReducer(authReducer, {
    isLogin:false,
    token:"",
    userData:""
});
// isLogin: (tokenDetails !== ''),
//     token: tokenDetails,
//     userDetails: firstName
return(
    <AuthContext.Provider value = {{authState,authDispatch}}>
        {children}  
    </AuthContext.Provider>
)
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };