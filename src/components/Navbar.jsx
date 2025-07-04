import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useScrollDirection from "./useScrollDirection";


function Navbar(){

  const scrollDirection = useScrollDirection();

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const[searchToggle, setSearchToggle] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  function Login(){
    setisLoggedIn(!isLoggedIn);
  }

    return(<>
        <nav className={`w-[80%] bg-transparent shadow px-0 py-4 z-50 mx-auto backdrop-blur-sm rounded-2xl fixed top- ml-[50%] transform -translate-x-1/2 transition-transform duration-300 ${
    scrollDirection === "down" ? "-translate-y-[200%]" : "translate-y-0"
  }`}>
  <div className="max-w-[100%] mx-auto flex items-center justify-between pl-5 pr-10 ">
    
      <Link to="/home">
          <div className="text-2xl font-bold text-white cursor-pointer ml-5">
        <img src="/logo.png" alt=""  className="h-10 rounded-md"/>
    </div>
      </Link>



    <div className=" navbar-links hidden items-center justify-center md:flex space-x-12 fixed ml-[30%]" >

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


    <div className="flex  items-center gap-10">
      {
        (!searchToggle) &&
      <i className="fa fa-search text-white cursor-pointer" style={{ fontSize: "20px" }} onClick={() => setSearchToggle(!searchToggle)}></i>
}


{/* SEARCH AREA */}
      
      {       
        (searchToggle) && 
        <div className="flex gap-5 items-center">
          <input type="text" onChange={(e) => setSearchValue(e.target.value)} className="bg-[#444444] rounded-md ml-5 text-white w-[65%] lg:w-[80%]" onKeyDown={(e) => {
            if (e.key === "Enter"){
              navigate(`/search/${searchValue}`);
            }
          }}/>

          <Link to={`/search/${searchValue}`}>
          <i className="fa fa-search text-white cursor-pointer" style={{ fontSize: "20px" }}> </i>
          </Link>
          <p className="text-white font-black text-xl cursor-pointer" onClick={() => setSearchToggle(!searchToggle)}>X</p>
        </div>
      }
      {/* {console.log(searchValue)} */}
      


      {isLoggedIn &&
      <i className="fa fa-bell text-white cursor-pointer" style={{ fontSize: "20px" }} ></i>}



        {/* {!isLoggedIn &&
        <button className="relative px-6 py-3 font-medium text-white bg-gradient-to-r from-[#262626] via-black to-[#1A1A1A] bg-[length:200%_100%] bg-left transition-all duration-500 ease-out hover:bg-right rounded-xl cursor-pointer right-3" onClick={Login}>
        Get Started 
        </button>
        } */}

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