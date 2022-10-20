import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { CardHeader } from "@mui/material";
// import data from "./PostFeed.json";
import {LoginContext} from '../Context/LoginContext'

const Sportlist = (props) => {
  const [data, setData] = React.useState([])
  const { email } = React.useContext(LoginContext);
  const getData = async () => {
    try {
      await axios.get(`http://localhost:8080/announcements/get-all` ,{
      }).then((res)=>setData(res.data))

    } catch (err) {
      console.log(err)
    }
  }
  React.useEffect(()=>{
    getData()
  },[])
  

  const filteredData = data.filter((el) => {
    //if no input then return the original
    if (props.input === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.description.toLowerCase().includes(props.input)
    }
  })

  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={3}>

        {filteredData.map((item) => (
          <Grid item xs={10}>
            <div className="feed">
              <Card variant="outlined">
                <CardHeader title={item.title} ></CardHeader>
                <CardMedia
                  component="img"
                  height="300"
                  image={"https://www.pontul-zilei.com/wp-content/uploads/2020/01/Tot-ce-trebuie-sa-stii-despre-fotbal.jpg"}
                />
                <CardContent
                  className="cardcontent"
                  style={{ backgroundColor: "#F1F3FF" }}
                  sx={{ display: "flex" }}
                  justify-content="space-evenly"
                  flex-direction="column"
                >{item.description}</CardContent>
                <h2>{item.postingUser}</h2>
                <h2>{item.timeOfPost.substring(0,10)}</h2>
              </Card>
            </div>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default Sportlist;
