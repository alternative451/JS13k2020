import welcome from "../assets/maps/welcome.json"
import Home from "../assets/maps/home.json"

import { Door, Pos, BombBag, TrialState, Controlable, Wall, Load, Spawn, Hostile, Dead, Bomb, Explodable, Collidable, UI, Player, PreBlast, Blast } from "../components"
import { createPlayer, createRed } from "./utils"
import { X_TILE_COUNT, HOSTILE_TYPE_PPAOE } from "../config" 

const getObjects = (objectName, objects, ...properties) => {
    return objects.reduce((accs, current) => {
        const object = current.properties.find((propertie) => {
            return propertie.name === objectName
        })
        if(object) {
            accs.push(
                {
                    x: current.x, y: current.y, ...current.properties.reduce((acc, propertie) => {
                        if (properties.indexOf(propertie.name) !== -1) {
                            acc[propertie.name] = propertie.value
                        }
                        return acc
                    }, {})
                }
            )
        }
        return accs
    }, [])

}


const process = (map, ecs, cv) => {
    

   
    

    const objects = map.layers[0].objects
    // player
    const startObjects = getObjects("isStart", objects)
    if(startObjects.length > 0) {
        const start = new Pos(startObjects[0].x, startObjects[0].y)
        createPlayer(ecs, new Pos(start.x,start.y,0))
    }
    if(map.properties) {
        const bombsProperties = map.properties.find((propertie) => propertie.name === "bombs")

        if(bombsProperties) {
            const bombs = bombsProperties.value.split(",").map((bomb) => parseInt(bomb, 10))
            ecs.select(BombBag).iterate((bombBagEntity) => {
                bombBagEntity.get(BombBag).set(bombs)
            })
        }
        const canRollProperties = map.properties.find((propertie) => propertie.name === "canRoll")
    
        if(canRollProperties) {
            ecs.select(BombBag).iterate((bombBagEntity) => {
                bombBagEntity.get(BombBag).canRoll = canRollProperties.value
            })
        }
    }
 
    // door
    ecs.create() 
    .add(
        new Door(),
        new Pos(1)
    )
    

    // spawns
    const spawnObjects = getObjects("isSpawn", objects, "max", "total", "type")
    spawnObjects.forEach((spawnObject) => {
        ecs
        .create()
        .add(
            new Spawn(ecs, spawnObject.max, spawnObject.total, spawnObject.type ? spawnObject.type : HOSTILE_TYPE_PPAOE),
            new Pos(spawnObject.x, spawnObject.y, 0),
        )
    })

    const reds = getObjects("isRed", objects, "status")
    reds.forEach((red) => {
        createRed(ecs, new Pos(red.x, red.y, 0), true, red.status)
    })
    
    const destroyables = getObjects("isDestroyable", objects)
    destroyables.forEach((destroyable) => {
        ecs
            .create()
            .add(
                new Explodable(),
                new Pos(destroyable.x, destroyable.y, 0)
            )
    })


    
    // Text
    const textObject = objects.find((object) => {
        return object.text && object.text.text.length > 0
    })
    if(textObject) {
        ecs
        .create()
        .add(
            new TrialState(textObject.text.text),
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
    const Entities = [Explodable ,Wall, Spawn, TrialState, Hostile, Door, Dead, Bomb, PreBlast, Blast]
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
    const maps = [welcome, Home]
    let currentMap = -1
    
    return {
        unload: () => {
            cleanMap(ecs)
        },

        init: () => {
            cleanMap(ecs)
            currentMap = 0
            ecs.select(Player).iterate((playerEntity) => {
                playerEntity.get(Player).hp = 100
            }) 
            process(maps[currentMap], ecs)
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
