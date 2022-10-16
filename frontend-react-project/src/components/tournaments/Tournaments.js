import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import data from './TournamentData.json';
import JoinButton from '../buttons/JoinButton';

const Tournaments = (props) => {

    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <Box sx={{ m: 5 }}>
            <Grid container spacing={3}>

                {data.map((item) => (
                    <Grid item xs={4}>
                        <div className="feed">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title={item.title}
                                    subheader={item.eventdate}
                                />
                                <Typography color="text.secondary">
                                    {item.sport}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={item.imgsrc}
                                />
                                <CardContent>
                                    <Typography variant="body2">
                                        {item.text}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <JoinButton />
                                </CardActions>

                            </Card>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );


};

export default Tournaments;