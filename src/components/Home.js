import React from "react";
import { Grid, Container, useMediaQuery, useTheme } from "@material-ui/core";
import Hero from "./UI/Hero";
import Experience from "./UI/Experience";

const Home = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.only("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.only("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const styleLG = {
    maxWidth: "90%",
  };

  const styleMD = {
    maxWidth: "85%",
  };

  const styleSM = {
    maxWidth: "90%",
  };
  return (
    <Grid container direction="column" style={{ marginTop: "" }}>
      <Container
        style={matchesMD ? styleMD : matchesSM ? styleSM : styleLG}
      >
        <Hero />
        <Experience />
      </Container>
    </Grid>
  );
};

export default Home;
