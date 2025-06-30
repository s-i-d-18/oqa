import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar(){

  const [isLoggedIn, setisLoggedIn] = useState(false);

  function Login(){
    setisLoggedIn(!isLoggedIn);
  }

    return(<>
        <nav className="w-[80%] bg-transparent shadow px-0 py-4  z-999 mx-auto backdrop-blur-sm rounded-2xl fixed  ml-[50%] transform -translate-x-1/2">
  <div className="max-w-[100%] mx-auto flex items-center justify-between ">
    
      <Link to="/home">
          <div className="text-2xl font-bold text-white cursor-pointer ml-5">
      OQA
    </div>
      </Link>



    <div className=" navbar-links hidden items-center justify-center md:flex space-x-12" >

      <Link to="/home">
        <p>Home
          <span></span>
        </p>
      </Link>
      

      <p>Explore
      <span></span>
      </p>

      <p>Community
      <span></span>
      </p>

      <p>Shop
      <span></span>
      </p>

    </div>


    <div className="flex space-x-4 items-center gap-10">

      <i className="fa fa-search text-white cursor-pointer" style={{ fontSize: "20px" }}></i>

      {isLoggedIn &&
      <i className="fa fa-bell text-white cursor-pointer" style={{ fontSize: "20px" }} ></i>}



        {!isLoggedIn &&
        <button className="relative px-6 py-3 font-medium text-white bg-gradient-to-r from-[#262626] via-black to-[#1A1A1A] bg-[length:200%_100%] bg-left transition-all duration-500 ease-out hover:bg-right rounded-xl cursor-pointer right-3" onClick={Login}>
        Get Started 
        </button>
        }

        {
          isLoggedIn &&
          <div className="w-8 h-8 bg-amber-50 rounded-full mr-7 cursor-pointer" onClick={Login}>
          
          </div>
        }
        
    </div>

  </div>
</nav>

    </>)
}

export default Navbar