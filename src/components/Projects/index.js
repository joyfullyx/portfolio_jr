import React, { useState } from "react";
import 
{ Box,
  Grid, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Collapse, 
  IconButton, 
  Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import clsx from 'clsx';
import { ExpandMore, GitHub } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function Projects() {
  const [spacing, setSpacing] = useState(4);
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid conatiner justify="center" spacing={spacing}>
              {[0, 1, 2, 3].map((value) => (
                <Grid key={value} item>
                  <Card className={classes.root}>
                    <CardHeader 
                      title="Project Name here"
                      subheader="technologies used here"/>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/paella.jpg"
                      title="Project Title Here"
                    />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blurb here about the project fjeioafjdksal;fjei;a
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="github repository">
                          <GitHub />
                        </IconButton>
                       <IconButton aria-label="deployed">
                          <GitHub />
                      </IconButton>
                      <IconButton
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                      <ExpandMore />
                      </IconButton>
                    </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>More Stuff:</Typography>
                    <Typography paragraph>
                      fejiao;fjeakl;fjd; blah blah blah blah blah
                    </Typography>
                  </CardContent>
                  </Collapse>
                </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
