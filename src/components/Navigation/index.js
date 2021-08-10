import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Link } from "@material-ui/core";

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
        <Link p={1}>About</Link>
        <Link p={1}>Projects</Link>
        <Link p={1}>Contact</Link>
      </Box>
    </div>
  );
}
