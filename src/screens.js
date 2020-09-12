import { Shape, Pos, Speed, Acc, Controlable, Player, Spawn, TrialState, CIRCLE, UI, Wall, Collidable, BombBag, Door } from "./components"
import { X_TILE_COUNT, Y_TILE_COUNT, PLAYER_WIDTH, PLAYER_HEIGHT } from "./config"
      
const cleanScreen = (ecs) => {
    const Entities = [UI, Player, BombBag]
    Entities.forEach((entityName) => {
        ecs.select(entityName).iterate((entityEntity) => {
            entityEntity.eject()
        })
    })

}

export const title = (ecs, cv) => {
            return {
                isGame : false,
                load: () => {
                    ecs.create()
                        .add(new UI("Play game !", cv.width / 2 - 150, cv.height / 2, () => {
                            window.currentScreen.unload()
                            window.currentScreen = gameScreen(ecs)
                            window.currentScreen.load()
                        }, true))
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
                isGame: true,
                load: () => {
                    window.mapLoader.next(ecs)
                },
                unload : () => {
                    cleanScreen(ecs)
                    window.mapLoader.unload(ecs)
                }
            }
            
        }
        export const dieScreen = (ecs, tileSize, cv) => {
            return {
                isGame: false,
                load : () => {
                    ecs.create()
                        .add(new UI("404 Life not found !",cv.width / 2 - 150, cv.height / 2, () => { }, false))
                    ecs.create()
                        .add(new UI("Restart ?",cv.width / 2 - 150, cv.height / 2 + 150, () => {
                            window.currentScreen.unload()
                            window.currentScreen = gameScreen(ecs)
                            window.mapLoader.init()
                        }, true))
                },
                unload : () => {
                    cleanScreen(ecs)
                }
            }
            
        }
        export const credit = (ecs, tileSize, cv) => {
            const text = [
                "Win 404 JS132020",
                "Thanks to Anouk for support & music",
                "To Finn",
                "To Max",
                "To kutuluk for ECS code",
                "To kutuluk for ECS code",
            ]
            return {
                isGame: false,
                
                load : () => {
                    ecs.create()
                        .add(new UI("",cv.width / 2 - 150, cv.height / 2, () => { }, false))
                    
                },
                unload : () => {
                    cleanScreen(ecs)
                }
            }
            
        }
    

