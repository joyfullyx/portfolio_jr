import React from "react";
import { Box, Tooltip } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";

export default function Contact() {
  return (
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
        <Tooltip title="GitHub">
          <IconButton
            onClick={() =>
              window.open("https://github.com/joyfullyx", "_blank")
            }
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Tooltip>

        {/* To email */}
        <Tooltip title="email">
          <a href="mailto:joyfullyx@gmail.com">
            <IconButton>
              <Email fontSize="large" />
            </IconButton>
          </a>
        </Tooltip>
      </Box>
    </div>
  );
}
