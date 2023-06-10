import { ERRORMSG, LOGIN, LOGOUT, SIGNIN } from "./auth.type";
let token = localStorage.getItem("token");

const initState = {
  isAuth: token ? true : false,
  token: !!token,
  name : "" ,
  role : ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role",action.payload.role)
      localStorage.setItem("name",action.payload.name)
      return {
        ...state,
        isAuth: true,
        name : action.payload.name ,
        role : action.payload.role
      };
    }
   
    case LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("role")
      return {
        ...state,
        isAuth: false,
        name : "",
        role : ""
      };
    }
    default:
      return state;
  }
};

export default authReducer;
