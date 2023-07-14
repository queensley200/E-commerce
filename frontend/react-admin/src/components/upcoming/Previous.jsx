import "./upcoming.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const PreviousEvent = () => {
  const rows = [
    
    {
      id: 2342353,
      topic: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    
      date: "1 March",
     participant: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      topic: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      
      date: "1 March",
     participant: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      topic: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    
      date: "1 March",
     participant: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <div className="up">
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: "15px !important" }} aria-label="simple table">
        <TableHead style={{  alignItems: "center",marginLeft:"-80px"}}>
          <h3 style={{  alignItems: "center",justifyContent: "center",marginLeft:"300px"}}>Previous </h3>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell className="tableCell">{row.id}</TableCell> */}
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  <div>
                    <h6>Topic:</h6>
                    <div className="about-topic">
                    <span style={{ justifyContent: "center", alignItems: "center",marginLeft:"7px"}}>{row.topic}</span>
                        
                    </div>
                  </div>
                 
                </div>
              </TableCell>
              
              <TableCell className="tableCell">
                <div>
                      <h6>Date</h6>
                    <div className="date" style={{ backgroundColor: "#7db117", paddingTop: "10px" , borderRadius: "2px", width:"100px",height:"50px" }}>
                     <span style={{ justifyContent: "center", alignItems: "center",marginLeft:"5px"}}>{row.date}</span>
                    </div>
                   
                </div>
               
                </TableCell>
             
                <TableCell className="tableCell">
                <div>
                      <h6>Participant</h6>
                    <div className="date" style={{ backgroundColor: "#7db117",borderRadius: "2px",paddingTop: "10px" , height:"50px" ,width:"50px", }}>
                     <span style={{ justifyContent: "center", alignItems: "center",marginLeft:"5px"}}>{row.participant}</span>
                    </div>
                   
                </div>
               
                </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default PreviousEvent;
