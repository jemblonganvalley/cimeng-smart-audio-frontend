import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillMegaphoneFill } from "react-icons/bs";

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(()=>{
    let user_data = sessionStorage.getItem("user_data")
    setUser(prev => prev = JSON.parse(user_data))
  },[])

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow pl-10 pr-10"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <BsFillMegaphoneFill style={{ width: "5rem", height: "100%" }} />
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              {user ? (
                <div className="navbar-item flex gap-2">
                  <h1>{user.email}</h1>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
