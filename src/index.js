import {Sound} from "./libs/audio.js"
import melodie from "./assets/audio/melo1.json";

import ecs from "js13k-ecs";

import { Pos, Controlable, TrialState, Bomb, Player, Hostile, Spawn, Speed, Acc, 
  UI, Wall, Collidable, BombBag, Dead, PreBlast, Blast, Door, Explosion, Agent, Explodable, PowUp } from "./components";
import { control, draw, trialDisplay, liveBombs, liveSpawn, ia, liveUi, collide, liveBombBag, liveDead, livePreBlast, liveBlast, liveDoors, liveHp, liveExplosions, drawAgent, liveExplodable, livePowUp } from "./systems";
import { title } from "./screens.js"
import { X_TILE_COUNT, Y_TILE_COUNT } from "./config.js";
import { mapLoader } from "./libs/mapLoader.js";


document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
cv.width = window.innerWidth
cv.height = window.innerHeight
const cpTileSize = () => (Math.min(window.innerWidth / X_TILE_COUNT, (window.innerHeight - 150) / Y_TILE_COUNT))
window.tileSize = cpTileSize()

window.addEventListener("resize", () => {
  cv.width = window.innerWidth
  cv.height = window.innerHeight
  window.tileSize = cpTileSize()
})


const ctx = cv.getContext("2d") 
window.mapLoader = mapLoader(ecs)
ecs.register(Pos, Speed, Acc, Controlable, TrialState, Bomb, Player, Hostile, Spawn, UI, Wall,
  Collidable, Dead, BombBag, PreBlast, Blast, Door, Explosion, Agent, Explodable, PowUp)

ecs.process(livePowUp(ecs), drawAgent(ecs, ctx), trialDisplay(ecs, ctx), control(ecs), 
  liveBombs(ecs, ctx), liveSpawn(ecs, ctx), ia(ecs, ctx), liveDoors(ecs, ctx), collide(ecs, ctx), liveBombBag(ecs, ctx, tileSize), 
  liveDead(ecs, ctx), liveExplosions(ecs, ctx), liveExplodable(ecs, ctx), livePreBlast(ecs, ctx, cv), liveBlast(ecs, ctx), liveUi(ecs, ctx, cv), liveHp(ecs, ctx, cv));

(async () => {
  const melodieCurry = await Sound(melodie)
  let soundHandle = null 
  let isCurry = false
  cv.onclick = () => {
    if(isCurry) return
    soundHandle = melodieCurry(true)
    isCurry = true
  }
  s.onclick = () => {
    soundHandle.stop() 
  }

})()

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