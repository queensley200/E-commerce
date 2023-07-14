import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";
import RightSide from "../../components/RightSide/RightSide";
import MainDash from "../../components/MainDash/Main Dash";
// import Upcoming from "../../components/upcoming/Upcoming";
// import PreviousEvent from "../../components/upcoming/Previous";

const Home = () => {
  return (
    <div className="home">
      <div className="side">
        <Sidebar/>
      </div>
      <div className="home-container">
        <Navbar/>
        <MainDash/>
      </div>
        <div className="right">
          <RightSide/>
        </div>
        </div>
    
  );
};

export default Home;


/* <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
          <div className="widgets">
            <Widget type="event" />
            <Widget type="upcoming" />
            <Widget type="mail" />
            
            
          </div>
         
        </div>
        <div className="listContainer">
          <div className="listTitle">All Participant</div>
          <Table />
          
        </div>
      </div> */