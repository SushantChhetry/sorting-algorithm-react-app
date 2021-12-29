import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

import "@fontsource/roboto/400.css";



let testArray = [];
let barDataValue;
let algo = undefined;

function randomArrayGenerator(length) {
  testArray = [];

  for (let i = 0; i < length; ++i) {
    testArray.push(Math.floor(Math.random() * 200 + 1));
  }
  console.log("Random Array Generator Output", testArray);

  return barData(testArray);
}

function barData(array) {
  let data = [];

  for (let j = 0; j < array.length; ++j) {
    data.push({
      name: j,
      value: array[j],
    });
  }

  return data;
}

//recharts: https://recharts.org/en-US/api/BarChart

function valuetext(value) {
  return `${value}°C`;
}

function Sudoku(props) {
  const [arraySize, setArraySize] = useState(5);
  const [bvalue, setBValue] = useState();
  const [reset, setReset] = useState(false);

  let sortedArray = [];
  let sliderDisable = false;

  //When there is change in arraySize
  useEffect(() => {
    setBValue(randomArrayGenerator(arraySize));
    setReset(false);
  }, [arraySize, reset]);
  
  algo = props.algo;
  if (algo !== undefined) {
    sortedArray = props.functionPassed(testArray);
    barDataValue = barData(sortedArray);
    sliderDisable = true;
  } else {
    barDataValue = barData(testArray);
    sliderDisable = false;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: "50px" }} elevation={0}>
            <Typography align="center">Array Length: {arraySize}</Typography>
            <Slider
              aria-label="Array Length"
              defaultValue={5}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={5}
              marks
              min={5}
              max={100}
              onChangeCommitted={(event, value) => {
                setArraySize(value);
              }}
              
            />
          </Paper>
          <Typography align="center"> Algorithm selected: {algo} </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <IconButton
                  aria-label="reset"
                  color="success"
                  onClick={() => {setReset(true)}}
                >
                  <RotateLeftRoundedIcon />
                </IconButton>
                <ResponsiveContainer aspect={2.9}>
                  <BarChart
                    width="100%"
                    height="100%"
                    data={barDataValue}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <Tooltip cursor={{ stroke: "green", strokeWidth: 1 }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#111f4d" />
                  </BarChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Sudoku;
