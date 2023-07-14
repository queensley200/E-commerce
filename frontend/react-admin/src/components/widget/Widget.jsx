import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 400;
  const diff = 20;

  switch (type) {
    case "event":
      data = {
        title: "Total occuring",
        isMoney: false,
        link: "Total Events",
        
      };
      break;
    case "upcoming":
      data = {
        title: "Upcoming Event",
        isMoney: false,
        link: "View all upcoming events",
        
      };
      break;
    case "mail":
      data = {
        title: "Total Sent Mail",
        isMoney: true,
        link: "View Total Sent Mail",
       
      };
      
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
