import {Sound} from "./libs/audio.js"
import melodie from "./assets/audio/melo1.json";

import ecs from "js13k-ecs";

import { Pos, Controlable, TrialState, Shape, Bomb, Player, Hostile, Spawn, Speed, Acc, 
  UI, Wall, Collidable, BombBag } from "./components";
import { control, draw, trialDisplay, liveBombs, liveSpawn, ia, liveUi, collide, liveBombBag } from "./systems";
import { title, arena } from "./screens.js"
import { X_TILE_COUNT, Y_TILE_COUNT } from "./config.js";


document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
cv.width = window.innerWidth
cv.height = window.innerHeight

const tileSize = Math.min(cv.width / X_TILE_COUNT, cv.height / Y_TILE_COUNT)


const ctx = cv.getContext("2d") 

ecs.register(Pos, Speed, Acc, Controlable, TrialState, Shape, Bomb, Player, Hostile, Spawn, UI, Wall,
  Collidable, BombBag)

ecs.process(draw(ecs, ctx, tileSize), control(ecs), trialDisplay(ecs, ctx), 
  liveBombs(ecs, ctx, tileSize), liveSpawn(ecs), ia(ecs), liveUi(ecs, ctx), collide(ecs), liveBombBag(ecs,ctx, cv))

/* sync () => {
  const melodieCurry = await Sound(melodie)
   const soundHandle = melodieCurry(false)

  setTimeout(() => {
    soundHandle.stop()
  }, 500)
})()*/

window.currentScreen = title(ecs, cv)
title(ecs, cv).load()


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