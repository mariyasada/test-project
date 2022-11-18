import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import { createTheme, ThemeProvider } from '@mui/material';
import {Route,Routes} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import ForgotPassWord from './Pages/ForgotPassWord';
import ProductCard from './Components/Card/Card';
import ProductListingPage from './Pages/ProductListingPage';

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
    {/* <ProductCard/> */}
    <Routes>
            <Route path="/" element={<LoginPage/>} />           
           <Route path="/registration" element={<RegistrationPage/>}/>
           <Route path="/forgotpassword" element={<ForgotPassWord/>}/>
           <Route path="/productlisting" element={<ProductListingPage/>}/>
    </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
