const initialState={
    user:{},
    products:[],
    isLoggedIn:false
}

export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SIGN_UP":
            return {...state,user:action.payload,isLoggedIn:true}

        case "LOGIN":
                return {...state,user:action.payload,isLoggedIn:true}  
                
         case "LOG_OUT":
            return {isLoggedIn:false}    
            
          case "LOAD_DATA":
            return{...state,products:[...action.payload]

            }  
    
        default:
            return state;
    }
}