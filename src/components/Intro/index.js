import React from 'react';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div id='about'>
      <Container>
        <Paper elevation={0}>
          <Box display='flex' justifyContent='center' width='100%'>
            <div className={classes.root}>
              <h2>About</h2>
              <p>
                Hey there! I'm Joy, a professional musician turned software
                developer in the greater Seattle area. I have a passion for
                developing responsive features and applications utilizing
                software for improving day to day tasks and enhancing
                accessiblity that can contribute to making a societal impact in
                all capacities. I love a good challenge and getting hands on
                with building and creating products that are simple, elegant,
                and beautiful.
                <br></br>
                <br></br>
                Continous learning and problem solving are my driving force and
                a large part of why I love to code. As with learning a new piece
                of music, there's always room to improve, develop, and grow. I
                believe that one should always have a student mentality- to
                continually learn through all the stages and steps and to never
                be complacent.
                <br></br>
                <br></br>
                Take a look around and feel free to contact me through email at
                joyfullyx@gmail.com or connect on LinkedIn!
              </p>
              <br></br>
              <br></br>
              <hr></hr>
              <br></br>
              {/* <br></br> */}
            </div>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
