import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";
import data from "./PostFeed.json";


const Sportlist = (props) => {

  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input)
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
                  image={item.imgsrc}
                />
                <CardContent
                  className="cardcontent"
                  style={{ backgroundColor: "#F1F3FF" }}
                  sx={{ display: "flex" }}
                  justify-content="space-evenly"
                  flex-direction="column"
                >{item.text}</CardContent>
              </Card>
            </div>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default Sportlist;
