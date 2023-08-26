import React from 'react';
import "./service.css";
import Cover from "../../../assets/services-assets/images/pilatescover.png";
import Img from "../../../assets/services-assets/images/meditationleaningdownI.webp";
import Img2 from "../../../assets/services-assets/images/MeditationHappyPose2.webp";
import Img3 from "../../../assets/services-assets/images/MeditaitonBurmesePose3.webp";
import Img4 from "../../../assets/services-assets/images/MeditationLayingdown4.webp";
import Img5 from "../../../assets/services-assets/images/Meditationa_quick_tip5.webp";
import Img6 from "../../../assets/services-assets/images/MedidationHalfLotus6.webp";

import {  Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';

const tiers = [
  {
    title: "Beginner",
    price: "2000",
    description: [
      "Introduction to Meditation",
      "Basic Meditation Techniques",
      "Building a Meditation Routine",
      "Cultivating Inner Calm",
    ],
    buttonText: "Join Now",
    buttonVariant: "contained",
  },
  {
    title: "Intermediated",
    subheader: "Most popular",
    price: "3500",
    description: [
      "Deepening Awareness",
      "Emotional Regulation",
      "Mind-Body Connection",
      "Expanding Consciousness",
    ],
    buttonText: "Join Now",
    buttonVariant: "contained",
  },
  {
    title: "Advanced",
    price: "5000",
    description: [
      "Insight Meditation",
      "Transcendental Practices",
      "Meditative Inquiry",
      "Teaching and Sharing",
    ],
    buttonText: "Join Now",
    buttonVariant: "contained",
  },
];

const Meditation = () => {

  return (
    <div>
      <div className='all-container'>
        <div className='hero banner' style={{padding:"20px"}}>
          <div className='me-title2'>
          <div className='textDesign1' style={{color:"black"}}>Meditation: Quit the Mind
        <div>and the soul will speak.</div>
        </div>
         <div className='paraDesign1'>
         <p>It changes and you start feeling good once again; </p>
         <p> the good and bad feelings come like waves.</p>
         <p>Transform your emotions with this beautiful guided meditation.</p>
          </div>
          <div style={{marginTop:"2vh",display:"flex",flexDirection:"row"}}>
          <Button  variant="contained" sx={{backgroundColor:"gray",marginRight:"15px","&:hover": { backgroundColor: "black" }}}> Get Started </Button>
          <Button  variant="contained" sx={{backgroundColor:"gray","&:hover": { backgroundColor: "black" }}}> Learn More.. </Button>
          </div>
         </div>
        {<img className='heroimg'
          src={Cover}
          alt='herobanner'
          style={{ width:"40vw", position:'absolute',right:'0%'}}
        /> }

      </div>
      <div className='Description banner' style={{ marginTop: "15vh",padding:"20px"}}>
  <h2 className='textDesign1' style={{ display: 'flex', flexWrap: 'wrap' }}>Medidation Classes</h2>
  <Grid
    container
    spacing={{ xs: 2, md: 4 }} // A
    sx={{ margin: '20px', padding: '15px', display: 'flex', flexWrap: 'wrap' }}
  >
    <Grid item xs={12} sm={6} md={4}> {/* Adjust the grid layout for responsiveness */}
      <div>
        <p className='textDesign1'>01.</p>
        <p className='textDesign1' style={{ fontSize: "25px" }}>Guided Meditation for Beginners</p>
        <p className='textDesign2' style={{ fontSize: "20px" }}>
          Our Guided Meditation for Beginners classes are specifically tailored for those who are new
          to meditation. These sessions provide a gentle introduction to the practice of meditation,
          helping participants cultivate mindfulness and relaxation. Perfect for individuals looking
          to alleviate stress and learn the fundamentals of meditation.
        </p>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <div >
        <p className='textDesign1'>02.</p>
        <p className='textDesign1' style={{ fontSize: "25px" }}>Intermediate Meditation Practice</p>
        <p className='textDesign2' style={{ fontSize: "20px" }}>
          The Intermediate Meditation Practice classes are designed to deepen your meditation experience.
          With a focus on refining mindfulness techniques and exploring different meditation approaches,
          participants in this class will enhance their ability to achieve mental clarity and inner calm.
          Prior experience with meditation is recommended.
        </p>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <div >
        <p className='textDesign1'>03.</p>
        <p className='textDesign1' style={{ fontSize: "25px" }}>Advanced Meditation Mastery</p>
        <p className='textDesign2' style={{ fontSize: "20px" }}>
          Our Advanced Meditation Mastery classes are intended for seasoned meditators who have
          established a strong foundation in meditation techniques. These sessions delve into more
          advanced practices, offering profound insights and an opportunity to attain heightened states
          of awareness. Admission to this level is subject to evaluation by our experienced instructors.
        </p>
      </div>
    </Grid>
  </Grid>
      </div>

    <div className='choose-us banner' style={{ paddingBottom: "5vh" }}>
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}  >
      <Grid item xs={14} sm={8}>
        <div style={{ paddingLeft: "6vw"}}>
          <img className='choose-us-img'
            src='https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
            alt='choose-pic'
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={8} >
        <Box sx={{ marginLeft: 5 }}>
          <Typography className='textDesign1' sx={{ color: 'blac', display: 'inline-block',fontSize:"25px"}}>
            WHY CHOOSE US
          </Typography>
          <span
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '5px',
              width: '10vw',
              height: '2px',
              backgroundColor: '#595959',
              marginBottom: "9px",
            }}
          />
          <div className='textDesign2'>Meditation can produce a deep state of
            relaxation and a tranquil mind.</div>
          <div className='section-1 card'>
            <Paper className=' banner' sx={{ p: 2, maxHeight: "300px", maxWidth: "400px"}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container >
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                     <p className='cardpara'>
                     Attract fresh meditators by showcasing meditation's stress-reducing benefits
                      and offering tailored, transformative experiences for inner peace.
                     </p>
                      <Button variant="contained" sx={{ marginTop: "30px", backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}>Click Here to Join</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Box>
      </Grid>
    </Grid>
  </Box>
    </div>

     <div className='course banner'style={{marginTop:"15vh",paddingBottom:"15vh"}}>
      <div className='textDesign1' style={{position:"relative",left:"40%",marginBottom:"6vw",display:'inline-block'}}>Our Courses
      <span
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          marginLeft: '5px',
          width: '10vw',
          height: '2px',
          backgroundColor: '#595959',
          marginBottom:"9px",
        }}></span></div>
     <div className='coursecard' style={{padding:"0 10vw"}}>
     <Grid container spacing={3}>
     <Grid item xs >
     <Card sx={{ minWidth: "300px" ,height:"70vh",display:"flex",flexDirection:"column"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Leaning your back against the wall
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This is a sitting position for meditation that supports your back. It can be done while
         leaning back against a wall. You can cross your legs or extend them out in front of you,
         whichever you feel is most comfortable.
        </Typography>
      </CardContent>
      <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}>
        Share
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" }, marginLeft: "10px" }}>
        Learn More
      </Button>
    </div>
    </Card>
     </Grid>
     <Grid item xs>
     <Card sx={{ minWidth: "300px",height:"70vh",display:"flex",flexDirection:"column"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Happy Pose
        </Typography>
        <Typography variant="body2" color="text.secondary">
        simplest sitting positions for meditation. Remember how much you liked sitting on the floor
        as a child cross-legged? This is precisely the same. All you need to take care of is your back
        being straight. Your hands can rest anywhere on your lap.
        </Typography>
      </CardContent>
      <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}>
        Share
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" }, marginLeft: "10px" }}>
        Learn More
      </Button>
    </div>
    </Card>
    </Grid>
     <Grid item xs>
     <Card sx={{ minWidth: "300px",height:"70vh",display:"flex",flexDirection:"column"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Burmese Pose
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This is just another variation of sitting cross-legged meditation pose. All you need
        to do is bring the heel of your left foot towards your right thigh, in a way that it
         should be touching your thigh, and your right foot should lie gently on the left foot.
        </Typography>
      </CardContent>
      <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}>
        Share
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" }, marginLeft: "10px" }}>
        Learn More
      </Button>
    </div>
    </Card>
    </Grid>
    </Grid>
     </div>
     <div className='coursecard' style={{marginTop:"10vh",padding:"0 10vw"}}>
     <Grid container spacing={3} >
     <Grid item xs>
     <Card sx={{ minWidth:"300px" ,height:"70vh",display: "flex", flexDirection: "column"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img4}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Laying down
        </Typography>
        <Typography variant="body2" color="text.secondary">
        There are no specific instructions to perform this meditation posture. All you have to
        do is lay down on a surface making sure your back is straight.
        </Typography>
      </CardContent>
      <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}>
        Share
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" }, marginLeft: "10px" }}>
        Learn More
      </Button>
    </div>
    </Card>
     </Grid>
     <Grid item xs>
     <Card sx={{ minWidth: "300px" ,height:"70vh",display:"flex",flexDirection:"column"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img5}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        A Quick Tip
        </Typography>
        <Typography variant="body2" color="text.secondary">
        You can either rest your feet on the ground and join your hands near your chest or
        keep one foot on the ground and the other on the thigh of the opposite leg, making
        a triangle-like shape and joining your hand above your head. These meditation
         positions will stretch your body and relax any tension from your muscles.
        </Typography>
      </CardContent>
      <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}>
        Share
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" }, marginLeft: "10px" }}>
        Learn More
      </Button>
    </div>
    </Card>
    </Grid>
     <Grid item xs>
     <Card sx={{ minWidth: "300px",height:"70vh",display:"flex",flexDirection:"column"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img6}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Half Lotus
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This is one of the meditation postures that requires extra focus. This pose is
        suited for people who want to prepare themselves for deep meditation practice.
        This pose is almost similar to the quarter lotus pose.
        </Typography>
      </CardContent>
      <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}>
        Share
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" }, marginLeft: "10px" }}>
        Learn More
      </Button>
    </div>
    </Card>
    </Grid>
    </Grid>
     </div>
     </div>
     <Container maxWidth="md" component="main" sx={{marginTop:"10vh",paddingBottom:"20px"}}>
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card sx={{height:"60vh",display:"flex",flexDirection:"column"}}>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    Rs.{tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    /mo
                  </Typography>
                </Box>

                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}

              </CardContent>
              <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}>
          <Button  sx={{ backgroundColor: "gray", "&:hover": { backgroundColor: "black" } }}fullWidth variant={tier.buttonVariant}>
                  {tier.buttonText}
          </Button>

            </div>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
      </div>
    </div>
  );
};

export default Meditation;

