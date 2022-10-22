import TILTED from '/Engine/main.js'

let level = await fetch('test.lvl');
level = await level.json();

TILTED.Input.Keyboard.onKeyDown(65, () => console.log("left"))
TILTED.Input.Keyboard.onKeyDown(68, () => console.log("right"))
TILTED.Input.Keyboard.onKeyDown(32, () => console.log("jump"))
TILTED.Input.Mouse.onMouseDown(  1, () => console.log("left click"))

let map = new TILTED.Tilemap(document.getElementById("level"));

map.render()