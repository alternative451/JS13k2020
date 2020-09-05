import {Sound} from "./libs/audio.js"
import melodie from "./assets/audio/melo1.json";

import ecs from "js13k-ecs";

import { Pos, Controlable, TrialState, Bomb, Player, Hostile, Spawn, Speed, Acc, 
  UI, Wall, Collidable, BombBag, Dead, PreBlast, Blast, Door, Explosion, Agent, Explodable } from "./components";
import { control, draw, trialDisplay, liveBombs, liveSpawn, ia, liveUi, collide, liveBombBag, liveDead, livePreBlast, liveBlast, liveDoors, liveHp, liveExplosions, drawAgent, liveExplodable } from "./systems";
import { title } from "./screens.js"
import { X_TILE_COUNT, Y_TILE_COUNT } from "./config.js";
import { mapLoader } from "./libs/mapLoader.js";


document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
cv.width = window.innerWidth
cv.height = window.innerHeight
const cpTileSize = () => (Math.min(window.innerWidth / X_TILE_COUNT, window.innerHeight / Y_TILE_COUNT))
window.tileSize = cpTileSize()

window.addEventListener("resize", () => {
  cv.width = window.innerWidth
  cv.height = window.innerHeight
  window.tileSize = cpTileSize()
})


const ctx = cv.getContext("2d") 
window.mapLoader = mapLoader(ecs)
ecs.register(Pos, Speed, Acc, Controlable, TrialState, Bomb, Player, Hostile, Spawn, UI, Wall,
  Collidable, Dead, BombBag, PreBlast, Blast, Door, Explosion, Agent, Explodable)



ecs.process(trialDisplay(ecs, ctx), drawAgent(ecs, ctx), control(ecs), 
  liveBombs(ecs, ctx), liveSpawn(ecs, ctx), ia(ecs), liveDoors(ecs, ctx), collide(ecs, ctx), liveBombBag(ecs, ctx, tileSize), 
  liveDead(ecs, ctx), liveExplosions(ecs, ctx), liveExplodable(ecs, ctx), livePreBlast(ecs, ctx, cv), liveBlast(ecs, ctx), liveUi(ecs, ctx), liveHp(ecs, ctx))

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