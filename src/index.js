import {Sound} from "./libs/audio.js"
import melodie from "./assets/audio/melo1.json";

import ecs from "js13k-ecs";

import { Pos, Controlable } from "./components.js";
import { control, draw } from "./systems.js";


document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
const ctx = cv.getContext("2d") 

ecs.register(Pos, Controlable)

ecs.process(draw(ecs, ctx), control(ecs))

/* sync () => {
  const melodieCurry = await Sound(melodie)
   const soundHandle = melodieCurry(false)

  setTimeout(() => {
    soundHandle.stop()
  }, 500)
})()*/


ecs
  .create()
  .add(
    new Pos(cv.width / 2, cv.height / 2, 0),
    new Controlable(),
  )
const loop = () => {
  cv.width += 0
  ecs.update()

  requestAnimationFrame(loop)
}

loop()