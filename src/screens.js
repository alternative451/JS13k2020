import { Shape, Pos, Speed, Acc, Controlable, Player, Spawn, TrialState, CIRCLE, UI, Wall } from "./components"

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

    ecs
        .create()
        .add(
            new Shape(CIRCLE),
            new Pos(cv.width / 2, cv.height / 2, 0),
            new Speed(0, 0, 0),
            new Acc(0, 0, 0),
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
    const map = [0, 0, 19, 0, 0, 9, 19, 9]
    for(let i = 0; i < map.length; i += 2) {
        ecs
            .create()
            .add(
                new Wall(map[i], map[i+1])
            )
        }
    }