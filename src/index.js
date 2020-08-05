import {Sound} from "./libs/audio.js"
import melodie from "./assets/audio/melo1.json";

import ecs from "js13k-ecs";

import { Pos, Controlable, TrialState, Shape, CIRCLE, Bomb, Player, Hostile, Spawn, Speed, Acc } from "./components.js";
import { control, draw, trialDisplay, liveBombs, liveSpawn, ia } from "./systems.js";


document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
cv.width = window.innerWidth
cv.height = window.innerHeight

const ctx = cv.getContext("2d") 

ecs.register(Pos, Speed, Acc, Controlable, TrialState, Shape, Bomb, Player, Hostile, Spawn)

ecs.process(draw(ecs, ctx), control(ecs), trialDisplay(ecs, ctx), liveBombs(ecs), liveSpawn(ecs), ia(ecs))

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
    new Shape(CIRCLE),
    new Pos(cv.width / 2, cv.height / 2, 0),
    new Speed(0,0,0),
    new Acc(0,0,0),
    new Controlable(),
    new Player()
  )
  ecs
  .create()
  .add(
    new Spawn(),
    new Pos(150, 150, 0),
  )
ecs
  .create()
  .add(
    new TrialState(),
    new Controlable(),
  )

  let last = 0
  let now  
const loop = () => {
  now = performance.now()
  cv.width += 0
  ecs.update(now - last)

  last = now
  requestAnimationFrame(loop)
}

loop()