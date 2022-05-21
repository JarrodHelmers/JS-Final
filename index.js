//Setting up my Canvas tag from index.html into my index.js
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//setting heigth and width property on canvas
canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)