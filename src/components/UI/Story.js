import React from "react";
import {
  Grid,

  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    name:{
        fontSize:'18px',
        fontWeight:'500'
    },
    city:{
        background: "#EEF8FF",
        padding:'5px',
        borderRadius:'4px'
    }
}))


const Story = (props) => {
    const classes = useStyles()
  return (
    <Grid>
      {props.data.map((story) => (
        <Grid>
          <Avatar alt="Remy Sharp" src={story.image} />
          <p className= {classes.name}>{story.firstName + " " + story.lastName}</p>
          <div style={{ display: "flex" }}>
            <p>in {story.city}</p>
            <div className={classes.city} style={{marginLeft:'5px'}}>{story.value}</div>
          </div>
          <p>{story.story}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Story;
