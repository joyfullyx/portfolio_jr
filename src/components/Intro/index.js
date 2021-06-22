import React from "react";
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
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
    <div>
      <Container>
        <Paper elevation={0}>
          <Box display="flex" justifyContent="center" width="100%">
            <div className={classes.root}>
              <p>Hey there! I'm Joy, a professional musician turned software developer based in the greater Seattle area. I love a good challenge and getting hands on with building and creating products that are simple, elegant, and beautiful. 
             <br></br>
              Take a look around and feel free to contact me through email or connect on LinkedIn!
              </p>
            </div>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
