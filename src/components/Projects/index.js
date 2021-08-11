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
  Tooltip,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ExpandMore, GitHub, DoubleArrow } from "@material-ui/icons";
import data from "../../data/projects.json";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    flexGrow: 1,
    maxWidth: 345,
    padding: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    width: 350,
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

  const handleExpandClick = (i) => {
    // setExpanded(!expanded);
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <div id="projects">
      <Container>
        <div className={classes.root}>
          <h2>Projects</h2>
        </div>
        <Grid item xs={12}>
          <Grid container display="flex" justify="center" spacing={7}>
            {/* map thru projects json */}
            {data.map((value, i) => (
              <Grid key={value} item>
                <Card className={classes.card}>
                  <CardHeader
                    title={value.name}
                    subheader={value.technologies}
                  />
                  <CardMedia
                    square
                    imageUrl={value.image}
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
                    <Tooltip title="Github">
                      <IconButton
                        aria-label="to github repo"
                        onClick={() => window.open(value.repo)}
                      >
                        <GitHub />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Deployed">
                      <IconButton
                        aria-label="to deployed"
                        onClick={() => window.open(value.deployed)}
                      >
                        <DoubleArrow />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="More">
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={() => handleExpandClick(i)}
                        aria-expanded={expanded === i}
                        aria-label="show more"
                      >
                        <ExpandMore />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                  <Tooltip title="Less">
                    <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph> </Typography>
                        <Typography paragraph>{value.description}</Typography>
                      </CardContent>
                    </Collapse>
                  </Tooltip>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
