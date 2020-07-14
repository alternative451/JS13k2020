import {Sound} from "./libs/audio.js"
import melodie from "./assets/audio/melo1.json";

(async () => {
  const melodieCurry = await Sound(melodie)
  const soundHandle = melodieCurry(false)

  setTimeout(() => {
    soundHandle.stop()
  }, 500)
})()
