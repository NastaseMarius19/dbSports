import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

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
    <CardMedia
      component="img"
      height="140"
      image="/static/images/cards/contemplative-reptile.jpg"
      alt="green iguana"
    />
    <CardContent
      className="cardcontent"
      style={{ backgroundColor: "#F1F3FF" }}
      sx={{ display: "flex" }}
      justify-content="space-evenly"
      flex-direction="column"
    >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Sportlist = () => {
  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={3}>
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
