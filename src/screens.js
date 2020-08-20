import { Shape, Pos, Speed, Acc, Controlable, Player, Spawn, TrialState, CIRCLE, UI, Wall, Collidable, BombBag } from "./components"
import { X_TILE_COUNT, Y_TILE_COUNT, PLAYER_WIDTH, PLAYER_HEIGHT } from "./config"

export const title = (ecs, cv) => {
    return {
        load: () => {
            ecs.create()
                .add(new UI("Start", cv.width / 2, cv.height / 2, () => {
                    window.currentScreen.unload()
                    window.currentScreen = arena(ecs, cv)
                }))
        },
        unload: () => {
            ecs.select(UI).iterate((entity) => {
                entity.eject()
            })
        }
    }
    
}


export const arena = (ecs, cv) => {

    ecs.create() 
        .add(
            new BombBag(3, 3000)
        )
    ecs
        .create()
        .add(
            new Shape(CIRCLE),
            new Pos(X_TILE_COUNT / 2, Y_TILE_COUNT / 2, 0),
            new Speed(0, 0, 0),
            new Acc(0, 0, 0),
            new Controlable(),
            new Player(),
            new Collidable(-PLAYER_WIDTH / 2, -PLAYER_HEIGHT / 2, PLAYER_WIDTH / 2, PLAYER_HEIGHT / 2)
        )
    ecs
        .create()
        .add(
            new Spawn(ecs),
            new Pos(1, 5, 0),
        )
    ecs
        .create()
        .add(
            new TrialState(),
            new Controlable(),
        )
    const map = [0, 0, 19, 0, 0, 9, 19, 9, 5, 5, 6, 5, 7, 5, 8, 5, 5, 6, 5, 7, 5, 8]
    for(let i = 0; i < map.length; i += 2) {
        ecs
            .create()
            .add(
                new Wall(map[i], map[i+1])
            )
        }
    }