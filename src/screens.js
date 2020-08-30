import { Shape, Pos, Speed, Acc, Controlable, Player, Spawn, TrialState, CIRCLE, UI, Wall, Collidable, BombBag, Door } from "./components"
import { X_TILE_COUNT, Y_TILE_COUNT, PLAYER_WIDTH, PLAYER_HEIGHT } from "./config"
        export const title = (ecs, cv) => {
            return {
                load: () => {
                    ecs.create()
                        .add(new UI("Start", cv.width / 2, cv.height / 2, () => {
                            window.currentScreen.unload()
                            window.currentScreen = gameScreen(ecs).load()
                        }))
                },
                unload: () => {
                    ecs.select(UI).iterate((entity) => {
                        entity.eject()
                    })
                }
            }
        }
        export const gameScreen = (ecs) => {
            return {
                load: () => {
                    window.mapLoader.next(ecs)
                },
                unload : () => {
                    window.mapLoader.unload(ecs)
                }
            }
            
        }
        export const dieScreen = (ecs, tileSize) => {
            ecs.create()
              .add(new UI("You died", X_TILE_COUNT * tileSize / 2, Y_TILE_COUNT * tileSize / 2, () => {}))
        }
    

