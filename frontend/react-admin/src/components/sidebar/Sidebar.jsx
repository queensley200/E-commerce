import "./sidebar.scss";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
// import MailIcon from '@mui/icons-material/Mail';
import EventNoteIcon from '@mui/icons-material/EventNote';
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul className="center-main">
         
          <li className="dash">
          <GridViewRoundedIcon className="icon" />
            {/* <span>Dashboard</span> */}
            <Link to="/dashboard" className="dash" >Dashboard</Link>
            
          </li>
          <ul className="upcom">
              <li >           
                 <Link to="/upcoming-event" className="upcom" >UPCOMING EVENTS</Link>
              </li>
              <li >       
                    <Link to="/previous-event" className="upcom" >Previous Events</Link>
              </li>
            </ul>
          
            <li className="dash">
              <EventNoteIcon className="icon" />
              <Link to="/event-uploaded"  style={{ textDecoration: "none" }} className="upcom" >Events Uploaded</Link>

            </li>
       
            <li className="dash">
              <EventNoteIcon className="icon" />
              <Link to="/mail"  style={{ textDecoration: "none" }} className="upcom" >Mail</Link>

            </li>
          
          <div className="bottom">
              <li>
                <SettingsApplicationsIcon className="icon" />
                <Link to="/settings"  style={{ textDecoration: "none" }} className="upcom" >Settings</Link>

              </li>
            <li className="logout">
              <ExitToAppIcon className="icon" />
              <Link to="/logout"  style={{ textDecoration: "none" }} className="upcom" >Logout</Link>

            </li>
         
          </div>
           
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
