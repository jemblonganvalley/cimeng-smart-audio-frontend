import { NavLink, useNavigate } from "react-router-dom";
import {
  IoCalendar,
  IoDocumentText,
  IoHeadset,
  IoHome,
  IoMegaphone,
  IoPeople,
  IoPlaySharp,
} from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Sidebar = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let user_data = sessionStorage.getItem("user_data")
    if(!user_data) {
      return navigate("/")
    } else {
      let dt = JSON.parse(user_data)
      setUserRole(prev => prev = dt.role)
    }

  }, []);

  const Logout = async () => {
    try {
      sessionStorage.clear()
      alert("Berhasil Logout");
      navigate("/"); // Navigate to the login page
    } catch (error) {
      console.error("Failed to logout:", error);
      // Optionally, handle the error (e.g., display an error message)
    }
  };
  return (
    <div>
      <aside className="menu has-shadow pl-2">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink
              to={"/dashboard"}
              className="menu-item"
              style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
            >
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/texttospeech"}
              className="menu-item"
              style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
            >
              <IoDocumentText /> Text To Speech
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/library"}
              className="menu-item"
              style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
            >
              <IoHeadset /> Library
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/playtime"}
              className="menu-item"
              style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
            >
              <IoPlaySharp /> Play Time
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/profile"}
              className="menu-item"
              style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
            >
              <IoPerson /> Profile
            </NavLink>
          </li>
        </ul>

        {userRole && userRole === "admin" && (
          <>
            <p className="menu-label ">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink
                  to={"/users"}
                  className="menu-item"
                  style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
                >
                  <IoPeople /> Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/audio"}
                  className="menu-item"
                  style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
                >
                  <IoMegaphone /> Audio
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/schedule"}
                  className="menu-item"
                  style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
                >
                  <IoCalendar /> Schedule
                </NavLink>
              </li>
            </ul>
          </>
        )}
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button className="button is-light" onClick={Logout}>
              Log Out
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
