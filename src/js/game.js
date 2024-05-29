import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { TiledResource } from '@excaliburjs/plugin-tiled'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())

        // const game = new ex.Engine({...});
        // const tiledMap = new TiledResource('./tdMap/td-map.tmx');
        // const loader = new ex.Loader([tiledMap]);
        // game.start(loader).then(() => {
        //     tiledMap.addToScene(game.currentScene);
        // });

    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)
    }
}

new Game()
