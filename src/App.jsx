import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
// import GamePageMax from "./pages/GamePageMax";
import Developers from "./pages/Developers";
import Publishers from "./pages/Publishers";
import GameSearch from "./components/GameSearch";
import ScrollToTop from "./ScrollToTop";
// import { BrowserRouter } from "react-router-dom";   


function App() {
  

    return(
        <>  
            <div className="mt-10 top-0"> 
                <Navbar /> 
            </div>
            
            {/* <BrowserRouter> */}
                <ScrollToTop />
                <Routes>
                    
                    <Route path="/" element={<LandingPage />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/game/:slug" element={<GamePage />}/>        
                    <Route path="/developers/:slug" element={<Developers />}/>
                    <Route path="/publishers/:slug" element={<Publishers />}/>
                    <Route path="/search/:slug" element={<GameSearch />} />
                
                </Routes>
                
            {/* </BrowserRouter> */}
        </>
    )
}

export default App
