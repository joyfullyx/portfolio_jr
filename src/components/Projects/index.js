import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ExpandMore, GitHub } from "@material-ui/icons";
import data from "../../data/projects.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Projects(props) {
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Container>
        {/* <Grid
          item
          container
          direction="row"
          className={classes.root}
          spacing={2}
        > */}
        <Grid item xs={12}>
          <Grid container display="flex" justify="center" spacing={8}>
            {data.map((value) => (
              <Grid key={value} item>
                <Card className={classes.root}>
                  <CardHeader
                    title={value.name}
                    subheader={value.technologies}
                  />
                  <CardMedia
                    className={classes.media}
                    image={value.image}
                    title="Project Title Here"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {value.blurb}
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
                      <Typography paragraph>{value.description}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Container>
    </div>
  );
}
