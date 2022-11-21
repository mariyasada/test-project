import './App.css';
import Header from './Components/Header/Header';
import { createTheme, ThemeProvider } from '@mui/material';
import {Route,Routes} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import ForgotPassWord from './Pages/ForgotPassWord';
import ProductPage from './Pages/ProductPage';
import ProductDetailPage from './Pages/ProductDetailPage.jsx/ProductDetailPage';

function App() {
  const lightTheme = createTheme ({
    breakpoints: {
      xsm:"0px",
      sm:"600px",
      md:"900px"
    },
  });
  return (
    <div className="App">
    <ThemeProvider theme={lightTheme}>
    <Header/>
    <Routes>
            <Route path="/" element={<LoginPage/>} />           
           <Route path="/registration" element={<RegistrationPage/>}/>
           <Route path="/forgotpassword" element={<ForgotPassWord/>}/>
           <Route path="/productlisting" element={<ProductPage/>}/>
           <Route path="/product/:productId" element={<ProductDetailPage/>}/>
           <Route path="*" element={<ProductDetailPage/>}/>

    </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
