const authReducer=(state, dispatch)=>{
    switch(dispatch.type){
        case "USER_LOGIN":
            return {...state, isLogin:true}
        case "USER_LOGOUT":
            return {...state, isLogin:false, token:"", userData:""}
        case "USER_DATA":
            return {...state, userData:dispatch.payload}
        case "USER_TOKEN":
            return {...state, token:dispatch.payload}
        default:
            state;
    }
   
}

const loginFormReducer=(state, dispatch)=>{
 switch(dispatch.type){
     case "SET_EMAIL":
            return {...state, email:dispatch.payload}
        case "SET_PASSWORD":
            return {...state, password:dispatch.payload}
        default:
            state;
 }
}

const signupFormReducer=(state, dispatch)=>{
    switch(dispatch.type){
        case "SET_FIRST_NAME":  
            return {...state, firstName:dispatch.payload}
        case "SET_LAST_NAME":
            return {...state, lastName:dispatch.payload}
        case "SET_EMAIL":   
            return {...state, email:dispatch.payload}
        case "SET_PASSWORD":
            return {...state, password:dispatch.payload}
        default:
            state;
    }
}


export {authReducer, loginFormReducer, signupFormReducer}