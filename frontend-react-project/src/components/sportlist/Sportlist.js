import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";
import data from "./PostFeed.json";

const card = <React.Fragment></React.Fragment>;

const Sportlist = (props) => {
  return (
    <div className="main-list">
      <Box sx={{ m: 5 }}>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12}>
              <div className="feed">
                <Card variant="outlined">
                  {card}
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
