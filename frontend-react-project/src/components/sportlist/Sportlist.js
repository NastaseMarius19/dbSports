import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";
import data from "./PostFeed.json";
import CardActions from "@mui/material/CardActions";

const Sportlist = (props) => {
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  //ca sa fie activat search ul trb mutat search bar ul din NavBarMainPage in MainPage

  return (
    <div className="main-list">
      <Box sx={{ m: 5 }}>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={10}>
              <div className="feed">
                <Card variant="outlined">
                  <CardHeader title={item.title}></CardHeader>
                  <CardMedia component="img" height="300" image={item.imgsrc} />
                  <CardContent
                    className="cardcontent"
                    style={{ backgroundColor: "#F1F3FF" }}
                    sx={{ display: "flex" }}
                    justify-content="space-evenly"
                    flex-direction="column"
                  >
                    {item.text}
                  </CardContent>
                  <CardActions>
                    <Typography color="text.secondary">
                      {item.postdate}
                    </Typography>
                    <Typography color="text.secondary">
                      Posted by {item.username} in {item.sport}
                    </Typography>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Sportlist;
