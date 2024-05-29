import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Keys, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { waves } from './waves.js'
import { Fish } from './fish.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        Resources.Path.addToScene(this.currentScene);
        console.log("start de game!")
    }
    onPreUpdate(engine){
        if(engine.input.keyboard.wasReleased(Keys.Space)){
            console.log('wave started');
        }
    }
}

new Game()
