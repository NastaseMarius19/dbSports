import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";
import axios from 'axios'


const card = (
  <React.Fragment>
  </React.Fragment>
);



const Sportlist = (props) => {
  const [items, setItems] = useState([])

  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      setItems(res.data) //API TEST
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={3}>

        {items.map((item) => (
          <Grid item xs={10}>
            <div className="feed">
              <Card variant="outlined">
                {card}
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
                >{item.body}</CardContent>
              </Card>
            </div>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default Sportlist;
