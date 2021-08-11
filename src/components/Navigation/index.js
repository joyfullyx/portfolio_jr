import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="row" justifyContent="space-around">
        <Link p={1} to="intro" spy={true} smooth={true}>
          About
        </Link>
        <Link p={1} to="projects" spy={true} smooth={true}>
          Projects
        </Link>
        <Link p={1} to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </Box>
    </div>
  );
}
