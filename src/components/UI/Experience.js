import React, { useState } from "react";
import {
  Grid,
  Typography,

  Button,
  Modal,
  Box,
  OutlinedInput,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import blackSmiling from "../../assets/black-smiling.png";
import AttachFile from "@material-ui/icons/AttachFile";
import InputAdornment from "@material-ui/core/InputAdornment";
import Story from "./Story";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#222222",
    zIndex: 1,
    padding: "20px",
  },
  blackContainer: {
    // position: "absolute",
    width: "651px",
    height: "651px",
    left: "662px",
    top: "209px",
    borderRadius: "50%",
    background: " #2E2E2E",
    padding: "20px",
  },
  author: {
    color: "white",
    fontSize: "18px",
  },
  customer: {
    position: "absolute",

    // marginTop: "-200px",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "4px",
    color: "white",

    padding: "10px",
  },
  text: {
    color: "white",
    lineHeight:'33px',
    marginTop:'10px'
  },
  share: {
    position: "absolute",
    width: "295px",
    height: "10.2px",
    left: "890px",
    top: "1252px",

    border: "1px solid #FF5C00",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "527px",
    height: "589px",

    background: "#FFFFFF",
    borderRadius: "16px",
    p: 4,
  },
  modalTypo: {
    textAlign: "center",
    fontSize: '15px',
   
  },
  imageInput: {
    width: "90%",
  },
  shareStory: {
    width: "90%",
    height: "100px",
  },
  interact: {
    fontSize: "13px",
    marginTop: "12px",
  },
  btn: {
    background: "#FF5C00",
    borderRadius: "8px",
    padding: "20px",
    color: "white",
  },
  modalbtn:{
    color: 'white',
    textTransform:'none'
  }
}));

const Experience = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [story, setStory] = React.useState("");
  const [city, setCity] = React.useState("");
  const [image, setImage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("");

  var submitStory = () => {
    let storyData = [];
    storyData.push({
      firstName,
      lastName,
      story,
      image,
      value,
      city,
    });
    console.log(storyData);
  };

  const data = [
    {
      firstName,
      lastName,
      story,
      image,
      value,
      city,
    },
  ];

  console.log(data)


  const handleImgChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Grid container direction="row" className={classes.mainContainer}>
        <Grid item container className={classes.blackContainer} xs>
          <img src={blackSmiling} alt='smiling'/>
        </Grid>
        <Grid item style={{marginTop:'100px',marginLeft:'50px'}} justifyContent="center" xs={4}>
          <p className={classes.author}>Tolu & Joy’s Experience</p>
          <div className={classes.customer}>customer</div>
          <div style={{ marginTop: "100px" }}>
            <p className={classes.text}>
              I had the best experience shopping with vasiti Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
          </div>
          <Button onClick={handleOpen} variant='text' className={classes.modalbtn}>share your own story</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.modal}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className={classes.modalTypo}
              >
                Share your amazing story
              </Typography>
              <div style={{ marginLeft: "25px", marginTop: "20px" }}>
                <div>
                  <Typography
                    style={{ fontSize: "12px", marginBottom: "10px" }}
                  >
                    Upload your Picture
                  </Typography>
                  <OutlinedInput
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    className={classes.imageInput}
                    endAdornment={
                      <>
                        <InputAdornment position="end">
                          <IconButton variant="contained" component="label">
                            <AttachFile />
                            <input
                              type="file"
                              style={{}}
                              id="file"
                              accept="images/*"
                              hidden
                              onChange={handleImgChange}
                            />
                          </IconButton>
                        </InputAdornment>
                      </>
                    }
                  />
                </div>
                <Grid
                  container
                  justifyContent="space-between"
                  style={{ width: "90%", marginTop: "10px" }}
                >
                  <div>
                    <Typography
                      style={{ fontSize: "12px", marginBottom: "10px" }}
                    >
                      First Name
                    </Typography>
                    <OutlinedInput
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Typography
                      style={{ fontSize: "12px", marginBottom: "10px" }}
                    >
                      Last Name
                    </Typography>
                    <OutlinedInput
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </Grid>
                <div style={{ marginTop: "10px" }}>
                  <Typography
                    style={{ fontSize: "12px", marginBottom: "10px" }}
                  >
                    Share your story
                  </Typography>
                  <OutlinedInput
                    className={classes.shareStory}
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                  />
                </div>
                <Grid
                  container
                  justifyContent="space-between"
                  style={{ width: "90%", marginTop: "10px" }}
                >
                  <Typography className={classes.interact}>
                    What did you interact with Vasiti as?
                  </Typography>
                  <RadioGroup
                    row
                    style={{ display: "flex" }}
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="customer"
                      control={<Radio />}
                      label="customer"
                    />
                    <FormControlLabel
                      value="vendor"
                      control={<Radio />}
                      label="vendor"
                    />
                  </RadioGroup>
                </Grid>
                <div style={{ marginTop: "10px" }}>
                  <Typography style={{ fontSize: "12px" }}>
                    City or Higher Institution (for Students)
                  </Typography>
                  <OutlinedInput
                    style={{ width: "90%" }}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <Grid
                  container
                  justifyContent="flex-end"
                  style={{ width: "90%", marginTop: "20px" }}
                >
                  <Button
                    variant="comtained"
                    className={classes.btn}
                    onClick={submitStory}
                  >
                    Share your story!
                  </Button>
                </Grid>
              </div>
            </Box>
          </Modal>
        </Grid>
      </Grid>
      <Story data={data}/>
    </div>
  );
};

export default Experience;
