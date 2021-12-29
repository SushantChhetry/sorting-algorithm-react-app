import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import "@fontsource/roboto/400.css";

function Footer() {
  return (
    <div>
      <Paper
        elevation={0}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Box
          style={{
            background: "White",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              gutterBottom
            >
              Sushant Chhetry
            </Typography>

            <Typography
              align="center"
              color="text.secondary"
              gutterBottom
              variant="body2"
            >
              Contact info:
              <IconButton>
                <Link href={"https://github.com/SushantChhetry"} target="_blank">
                  <GitHubIcon sx={{ color: "#e43a19" }} />
                </Link>
              </IconButton>
              <IconButton>
              <Link href = {"https://www.linkedin.com/in/sushantchhetry/"} target = "_blank">
                <LinkedInIcon sx={{ color: "#e43a19" }} />
              </Link>
              </IconButton>
            </Typography>
          </Container>
        </Box>
      </Paper>
    </div>
  );
}

export default Footer;
