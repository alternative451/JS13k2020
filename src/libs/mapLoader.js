import welcome from "../assets/maps/welcome.json"

import { Door, Pos, BombBag, TrialState, Controlable, Wall, Load, Spawn, Hostile, Dead, Bomb } from "../components"
import { createPlayer } from "./utils"
import { X_TILE_COUNT } from "../config"

const process = (map, ecs, cv) => {
    const objects = map.layers[0].objects
    // player
    const startObject = objects.find((object) => {
        if(object.properties) {
            return object.properties.find((propertie) => propertie.name === "isStart")
        }
    })
    if(startObject) {
        const start = new Pos(startObject.x, startObject.y)
        createPlayer(ecs, new Pos(start.x,start.y,0))
    }
    // door
    ecs.create() 
    .add(
        new Door(),
        new Pos(1)
    )
    

    // spawns
    const spawnObjects = objects.reduce((acc, object) => {
        if(object.properties) {
            if(object.properties.find((propertie) => propertie.name === "isSpawn")) {
                const max = object.properties.find((prop) => prop.name === "max").value
                const total = object.properties.find((prop) => prop.name === "total").value
                acc.push({x : object.x, y: object.y, total, max})
            }
        }
        return acc
    }, [])
    console.log(spawnObjects)
    spawnObjects.forEach((spawnObject) => {
        ecs
        .create()
        .add(
            new Spawn(ecs, spawnObject.max, spawnObject.total),
            new Pos(spawnObject.x, spawnObject.y, 0),
        )
    })
    
    // Text
    const textObject = objects.find((object) => {
        return object.text && object.text.length > 0
    })
    if(textObject) {
        ecs
        .create()
        .add(
            new TrialState(textObject.text),
            new Pos(textObject.x, textObject.y),
            new Controlable(),
        )
    }
    // walls
    const tiles = map.layers[1]
    tiles.data.forEach((element, index) => {
        if(element !== 0) {
            ecs
            .create()
            .add(
                new Wall(index % X_TILE_COUNT, Math.floor(index / X_TILE_COUNT))
            )
        }
        
    })
    

} 

const cleanMap = (ecs) => {
    const Entities = [Wall, Spawn, TrialState, Hostile, Door, Dead, Bomb]
    Entities.forEach((entityName) => {
        ecs.select(entityName).iterate((entityEntity) => {
            entityEntity.eject()
        })
    })
    const bb = ecs.select(BombBag)
    bb.iterate((bbEntity) => {
        bbEntity.get(BombBag).roll()
    })

}

export const mapLoader = (ecs) => {
    const maps = [welcome]
    let currentMap = -1
    
    return {
        unload: () => {
            cleanMap(ecs)
        },

        next: () => {
            cleanMap(ecs)
            currentMap++
            if(currentMap < maps.length ) {
                process(maps[currentMap], ecs)
            }
        }
    }
   
}
