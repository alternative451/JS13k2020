import welcome from "../assets/maps/welcome.json"
import level1 from "../assets/maps/level1_bombs.json"
import level2 from "../assets/maps/level2_bombsMoove.json"
import level3 from "../assets/maps/level3_flashice.json"
import level4 from "../assets/maps/level4_boom.json"
import level5 from "../assets/maps/level5_boss.json"



import { Door, Pos, BombBag, TrialState, Controlable, Wall, Load, Spawn, Hostile, Dead, Bomb, Explodable, Collidable, UI, Player, PreBlast, Blast, PowUp, Agent } from "../components"
import { createPlayer, createRed } from "./utils"
import { X_TILE_COUNT, HOSTILE_TYPE_PPAOE } from "../config" 
import { drawPowup } from "../draw_helpers"

const getObjects = (objectName, objects, ...properties) => {
    return objects.reduce((accs, current) => {
        if(!current.properties) return accs
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
    ecs.select(BombBag).iterate((bombBagEntity) => {
        bombBagEntity.get(BombBag).canRoll = true
    })
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
    

    // powups

    const powups = getObjects("isPowUp", objects)
    powups.forEach((powup) => {
        ecs.create()
            .add(
                new PowUp(),
                new Pos(powup.x, powup.y, 0),
                new Agent(drawPowup)
            )
    })


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

    const reds = getObjects("isRed", objects, "status", "type")
    reds.forEach((red) => {
        createRed(ecs, new Pos(red.x, red.y, 0), true, parseInt(red.status, 10), red.type ? red.type : HOSTILE_TYPE_PPAOE)
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
    const textObjects = objects.filter((object) => {
        return object.text && object.text.text.length > 0
    })
    textObjects.forEach((textObject) => {
        ecs
        .create()
        .add(
            new TrialState(textObject.text.text),
            new Pos(textObject.x, textObject.y),
            new Controlable(),
        )
    })
       

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
    const Entities = [Explodable ,Wall, Spawn, TrialState, Hostile, Door, Dead, Bomb, PreBlast, Blast, PowUp]
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
    const maps = [welcome, level1, level2, level3, level4, level5]
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
            } else {
                
            }
        }
    }
   
}
