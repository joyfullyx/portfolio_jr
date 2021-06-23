import React from "react";
import { Box } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";

export default function Contact() {
  return (
    <div>
      <Box display="flex" justifyContent="center">
        
        {/* To LinkedIn */}
        <IconButton onClick={() => window.open('https://www.linkedin.com/in/joy-rhee/', '_blank')}>
          <LinkedIn fontSize="large" />
        </IconButton>

        {/* To Github */}
        <IconButton onClick={() => window.open('https://github.com/joyfullyx', '_blank')}>
          <GitHub fontSize="large" />
        </IconButton>

        {/* To email */}
        <a href="mailto:joyfullyx@gmail.com">
          <IconButton>
            <Email fontSize="large" />
          </IconButton>
        </a>
      </Box>
    </div>
  );
}
