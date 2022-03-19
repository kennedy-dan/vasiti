import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TestimonialImage from "../../assets/Testimonial_image1.png";

const useStyles = makeStyles((theme) => ({
  amazingExperience: {
    fontSize: "62px",
    fontWeight: 700,
  },
  ellipse: {
    position: "absolute",
    width: "651px",
    height: "651px",
    left: "662px",
    top: "209px",
    borderRadius: "50%",
    background: " #FFF8F5",
    zIndex: -1
  },
  TestimonialImage: {
    paddingLeft: "50px",
  },
  siteDescription:{
      fontSize:'18px'
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="space-evenly"
      direction="row"
      style={{ marginTop: "100px", height:'100vh' }}
      alignItems="center"
    >
      <Grid item xs>
        <p className={classes.amazingExperience}>
          Amazing Experiences from Our Wonderful Customers
        </p>
        <p className={classes.siteDescription}>
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </Grid>
      <Grid item xs>
        <div className={classes.ellipse}>
          <img src={TestimonialImage} className={classes.TestimonialImage} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Hero;
