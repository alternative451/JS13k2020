import { sonantxr_generate_song } from "./sonant_wrapper.js"

var audio_ctx = new (window.webkitAudioContext||window.AudioContext)()

const makeAsync = async (rawSound) => {
  return new Promise((resolve) => {
    sonantxr_generate_song(audio_ctx, rawSound, buffer => {
      resolve(buffer)
    })
  })
}

export const Sound = async (rawSound) => {
    
  const buffer = await makeAsync(rawSound)
  const source = audio_ctx.createBufferSource()
  source.buffer = buffer
  source.connect(audio_ctx.destination)

  return (loop) => {
    source.loop = loop
    source.start()
    return source
  }
}
