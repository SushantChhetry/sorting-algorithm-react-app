import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";

import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import IconButton from "@mui/material/IconButton";


import AlgoFunction from "./AlgoFunction";

function Navbar() {
  const [typeAlgo, setTypeAlgo] = useState();
  const [reset, setReset] = useState(false);

  function changeNav(){
    setReset(false)
    setTypeAlgo();
  }

  useEffect(() => {
    changeNav();
    }
  , [reset])

  //need to find a way to reset typeAlgo after passing the value
  //need to route to a new page from learn More
  const quickInfo = `Elements are divided into smaller parts under some condition and sort operation is performed on those elements`;

  const bubbleInfo = `Sort an array by comparing adjacent elements and swapping them according to the correctness of their order`;

  const mergeInfo = `Divide the array midway and recursively perform this operation till we get one arrays of element. Then we start creating the sorted array from the one elements array`;

  const insertionInfo = `Sort an array by inspecting the elements from left to right and placing the smaller element to the left and the larger element to the right`;

  const selectionInfo = `Divide into sorted array and unsorted array and minimum from unsorted array is picked and placed in the sorted array`;

  // const learnMoreInfo = `Learn more about these algorithm`;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: "#e43a19",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ButtonGroup
                  variant="contained"
                  size="small"
                  aria-label="algorith button group"
                >
                  <Tooltip
                    title={mergeInfo}
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 1000 }}
                  >
                    <Button
                      onClick={() => {
                        setTypeAlgo("merge");
                      }}
                    >
                      Merge Sort
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title={insertionInfo}
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 1000 }}
                  >
                    <Button
                      onClick={() => {
                        setTypeAlgo("insert");
                      }}
                    >
                      Insertion Sort
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              </Grid>

              <Grid item xs={1}>
              <Tooltip
                    title="Reset Algorithm"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 1000 }}
                  >
                <IconButton
                  aria-label="reset"                  
                  onClick={() => {
                    setReset(true);
                  }}
                >
                  <RotateLeftRoundedIcon />
                </IconButton>
              </Tooltip>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  sx={{ flexGrow: 1 }}
                  style={{ color: "white" }}
                >
                  Sorting Algorithm Visualization
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <ButtonGroup
                  variant="contained"
                  size="small"
                  aria-label="algorithm button group "
                >
                  <Tooltip
                    title={quickInfo}
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 1000 }}
                  >
                    <Button
                      onClick={() => {
                        setTypeAlgo("quick");
                      }}
                    >
                      Quick Sort
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title={bubbleInfo}
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 1000 }}
                  >
                    <Button
                      onClick={() => {
                        setTypeAlgo("bubble");
                      }}
                    >
                      Bubble Sort
                    </Button>
                  </Tooltip>

                  <Tooltip
                    title={selectionInfo}
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 1000 }}
                  >
                    <Button
                      onClick={() => {
                        setTypeAlgo("select");
                      }}
                    >
                      {" "}
                      Selection Sort
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <AlgoFunction algoType={typeAlgo} />
    </div>
  );
}

export default Navbar;
