import { app ,db} from "../firebaseconfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { doc, setDoc,getDoc,collection, query, where,getDocs, arrayUnion,updateDoc,arrayRemove  } from "firebase/firestore"
import { useNavigate } from "react-router-dom";

export const signUp = async (signupData,dispatch,navigate) => {   
        try {
            const auth = getAuth(app);
            const {user} = await  createUserWithEmailAndPassword(auth, signupData.email, signupData.password); 
            console.log(user,"first user");
            const userObject={...signupData,id:user.uid}
             await setDoc(doc(db, "users",user.uid),userObject);
            dispatch ({type:"SIGN_UP",payload:userObject}) 
            navigate("/");

          } 
          catch (error) {
            console.error(error);
          }    
  }

  export const logInHandler=async(logInData,dispatch,navigate)=>{
    try {
        const auth = getAuth(app);
        const {user} = await signInWithEmailAndPassword(auth, logInData.email, logInData.password);
        const userDoc=await getDoc(doc(db, "users",user.uid));
        const userData= userDoc.data()
        dispatch ({type:"SIGN_UP",payload:userData})
        navigate("/productlisting"); 

      } catch (error) {
        console.log("email and password are incorrect");
        navigate("/login");
        console.error(error);
      }

  }

  export const logOut= (dispatch)=>{
      try {
        const auth = getAuth(app);
        signOut(auth)
      .then(() => {
        console.log("successFully Loggedout");
        dispatch({type:"LOG_OUT"})
      })
    }
      catch(err){
        console.log("something went wrong",err);
      }        
    }
  
    export const loadProductData=async(dispatch)=>{
        try {
            const allproductsSnapshot=await getDocs(collection(db,"products")); 
            const products = allproductsSnapshot.docs.map((doc) => doc.data());
            console.log(products,"list of products");
            dispatch({ type: "LOAD_DATA", payload: products });
            } catch (e) {
              console.error("Error while loading a document: ", e);
            } 
    }

