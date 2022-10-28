"use strict";

const canvas = document.querySelector("#jsCanvas");
const context = canvas.getContext("2d");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(e) {
  let x = e.offsetX;
  let y = e.offsetY;
}

function onMouseDown(e) {
  painting = true;
}

function onMouseUp(e) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
