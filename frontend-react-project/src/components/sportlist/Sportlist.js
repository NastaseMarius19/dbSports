import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const card = (
  <React.Fragment>
    <CardHeader title="titlu" ></CardHeader>

    <CardMedia
      component="img"
      height="140"
      image="/static/images/cards/contemplative-reptile.jpg"
      alt="green iguana"
    />
  </React.Fragment>
);

const Sportlist = () => {
  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <div className="feed">
            <Card variant="outlined">
              {card}
              <CardContent
                className="cardcontent"
                style={{ backgroundColor: "#F1F3FF" }}
                sx={{ display: "flex" }}
                justify-content="space-evenly"
                flex-direction="column"
              ></CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="feed">
            <Card variant="outlined">{card} </Card>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="feed">
            <Card variant="outlined">{card} </Card>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="feed">
            <Card variant="outlined">{card} </Card>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="feed">
            <Card variant="outlined">{card} </Card>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sportlist;
