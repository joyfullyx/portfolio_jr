import React from "react";
import Resume from "../../Resume/resume.pdf";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Tooltip } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { LinkedIn, GitHub, Email, Description } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div id="contact">
      <Container>
        <div className={classes.root}>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h2>Contact</h2>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:joyfullyx@gmail.com">joyfullyx@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joy-rhee"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/joyfullyx"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a href={Resume} target="_blank" rel="noreferrer">
                résumé
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div>
        <Box display="flex" justifyContent="center">
          {/* To LinkedIn */}
          <Tooltip title="LinkedIn">
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/joy-rhee/", "_blank")
              }
            >
              <LinkedIn fontSize="large" />
            </IconButton>
          </Tooltip>

          {/* To Github */}
          <Tooltip title="Github">
            <IconButton
              onClick={() =>
                window.open("https://github.com/joyfullyx", "_blank")
              }
            >
              <GitHub fontSize="large" />
            </IconButton>
          </Tooltip>

          {/* To email */}
          <Tooltip title="Email">
            <a href="mailto:joyfullyx@gmail.com">
              <IconButton>
                <Email fontSize="large" />
              </IconButton>
            </a>
          </Tooltip>

          {/* {To resume pdf} */}
          <Tooltip title="Resume">
            <a href={Resume} target="_blank" rel="noreferrer">
              <IconButton>
                <Description fontSize="large" />
              </IconButton>
            </a>
          </Tooltip>
        </Box>
      </div>
    </div>
  );
}
