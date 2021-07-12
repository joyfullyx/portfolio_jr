import React from "react";
import Intro from "../../components/Intro";
import { Box, Container } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[100],
    },
  },
});

export default function Header() {
  return (
    <div>
      <Container>
        <Box
          bgcolor={theme.palette.primary.main}
          color="error.contrastText"
          display="flex"
          justifyContent="center"
          width="100%"
          py={16}
        >
          <h1>Hello!</h1>
          {/* <Intro /> */}
        </Box>
      </Container>
    </div>
  );
}
