import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { Navbar } from "./Components/Navbar";

import AllRoutes from "./Routers/AllRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setIsLoading(true);
      let timer = setTimeout(() => {
          setIsLoading(false);
          return () => clearInterval(timer);
      }, 1000);
  }, []);
    return isLoading?(
      <Loader/>
    ):(
    <>
      <Navbar/>  
        <div style={{marginTop : "150px"}}></div>
        
        <AllRoutes />
    
      
      <Footer/>
    </>
    )


}

export default App;
