import React from "react";
import Sudoku from "./Sudoku";

function AlgoFunction(props) {
  function quickSort(array) {
    //Divide and Conquer
    //Recursive
    //Not stable
    //O(nlogn)

    //base case

    if (array.length <= 1) {
      return array;
    }

    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  }

  function bubbleSort(array) {
    //Compare the adjacent and swap
    //O(n^2)
    let len = array.length;
    for (let j = 0; j < len; j++) {
      for (let i = 0; i < len; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
    return array;
  }

  function mergeSort(array) {
    //divide and conquer algorithm
    //O(nlogn)
    let arrayLength = array.length;
    //BASE CALL
    if (arrayLength <= 1) {
      return array;
    }

    let midPoint = Math.floor(arrayLength / 2);

    let leftArray = array.slice(0, midPoint);
    let rightArray = array.slice(midPoint);
    //RECURSIVE CALL
    return merge(mergeSort(leftArray), mergeSort(rightArray));

    //MERGE THE ARRAYS

    function merge(leftArray, rightArray) {
      const output = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        const leftEl = leftArray[leftIndex];
        const rightEl = rightArray[rightIndex];

        if (leftEl < rightEl) {
          output.push(leftEl);
          leftIndex++;
        } else {
          output.push(rightEl);
          rightIndex++;
        }
      }
      return [
        ...output,
        ...leftArray.slice(leftIndex),
        ...rightArray.slice(rightIndex),
      ];
    }
  }

  function insertionSort(array) {
    //Even though the time complexity is same to bubble sort and selection sort--
    //--insertion sort is considered better because it has comparitvely less numbers of--
    //--comparisions
    //O(n^2)

    for (let i = 1; i < array.length; i++) {
      let insertValue = array[i];
      let holeValue = i;

      while (holeValue > 0 && array[holeValue - 1] > insertValue) {
        array[holeValue] = array[holeValue - 1];
        holeValue--;
      }

      array[holeValue] = insertValue;
    }
    return array;
  }

  function selectionSort(array) {
    //take one element and iterate and find the smallest
    //O(n^2)
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      let temp = array[i];
      //get smallest value's index
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      //swap
      if (minIndex !== i) {
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    return array;
  }

  let algoType = props.algoType;
  let graph;

  switch (algoType) {
    case "quick":
      console.log("clicked: quick");
      graph = <Sudoku algo={algoType} functionPassed={quickSort} />;
      break;
    case "bubble":
      console.log("clicked: bubble");
      graph = <Sudoku algo={algoType} functionPassed={bubbleSort} />;
      break;
    case "merge":
      console.log("clicked: merge");
      graph = <Sudoku algo={algoType} functionPassed={mergeSort} />;
      break;
    case "insert":
      console.log("clicked: insert");
      graph = <Sudoku algo={algoType} functionPassed={insertionSort} />;
      break;
    case "select":
      console.log("clicked: select");
      graph = <Sudoku algo={algoType} functionPassed={selectionSort} />;
      break;

    default:
      graph = <Sudoku algo={undefined} />;
      break;
  }

  return <div>{graph}</div>;
}

export default AlgoFunction;
