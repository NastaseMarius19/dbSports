import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";
import data from "./PostFeed.json";

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Sportlist = (props) => {
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
                <CardActions>
                  <Typography color="text.secondary">
                    Posted by {item.username} in {item.sport}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.postdate}
                  </Typography>
                </CardActions>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sportlist;
